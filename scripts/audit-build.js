/* eslint-disable no-console */
/**
 * Static audit of the built site in public/.
 *
 * Checks that every internal link resolves to a real built page or asset,
 * that each page has the metadata search engines and link unfurlers need,
 * that headings start at a single h1, and that no placeholder copy or
 * unsupported marketing claims survived into the output.
 *
 * Run with:  node scripts/audit-build.js
 * Exits non-zero if anything fails, so it can gate a deploy.
 */

const fs = require("fs")
const path = require("path")

const PUBLIC = path.resolve(__dirname, "..", "public")
const problems = []
const notes = []

const htmlFiles = []
;(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    // _gatsby/ holds internal render partials ("slices"), not real pages.
    if (entry.isDirectory()) {
      if (entry.name === "_gatsby") continue
      walk(full)
    } else if (entry.name.endsWith(".html")) htmlFiles.push(full)
  }
})(PUBLIC)

const routeOf = file =>
  "/" + path.relative(PUBLIC, file).replace(/index\.html$/, "").replace(/\\/g, "/")

const exists = target => {
  const clean = target.split("#")[0].split("?")[0]
  if (clean === "/" ) return fs.existsSync(path.join(PUBLIC, "index.html"))
  const asFile = path.join(PUBLIC, clean)
  return (
    fs.existsSync(asFile) ||
    fs.existsSync(path.join(asFile, "index.html")) ||
    fs.existsSync(asFile.replace(/\/$/, "") + ".html")
  )
}

const BANNED = [
  /lorem ipsum/i,
  /\b500M\+/i,
  /\b1B\+/i,
  /10x faster/i,
  /24\/7/i,
  /industry-leading/i,
  /enterprise-grade/i,
  /bank-grade/i,
  /trusted by leading/i,
  /travislord/i,
  /gatsby-starter/i,
  /jamstackthemes/i,
  /builtatlightspeed/i,
  /placeholder/i,
]

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8")
  const route = routeOf(file)
  const label = route === "/404.html" ? "/404" : route

  // --- metadata ---
  if (!/<title[^>]*>[^<]+<\/title>/.test(html))
    problems.push(`${label}: missing <title>`)
  if (!/<meta name="description" content="[^"]{40,}"/.test(html))
    problems.push(`${label}: missing or too-short meta description`)
  if (!/<link rel="canonical"/.test(html))
    problems.push(`${label}: missing canonical link`)
  if (!/<meta property="og:image"/.test(html))
    problems.push(`${label}: missing og:image`)
  if (!/<html lang="en"/.test(html)) problems.push(`${label}: missing lang="en"`)

  // --- headings ---
  const h1s = html.match(/<h1[\s>]/g) || []
  if (h1s.length === 0) problems.push(`${label}: no <h1>`)
  if (h1s.length > 1) problems.push(`${label}: ${h1s.length} <h1> elements`)

  // --- images must have alt ---
  for (const img of html.match(/<img[^>]*>/g) || []) {
    if (!/\salt=/.test(img)) problems.push(`${label}: <img> without alt`)
  }

  // --- banned copy ---
  // Strip scripts, styles, and then all markup, so we test the words a
  // visitor actually reads rather than CSS class names like
  // "placeholder:text-ink-soft".
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
  for (const pattern of BANNED) {
    if (pattern.test(text))
      problems.push(`${label}: banned content matched ${pattern}`)
  }

  // --- internal links resolve ---
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = m[1]
    if (target.startsWith("//")) continue
    if (!exists(target)) problems.push(`${label}: broken internal link ${target}`)
  }

  // --- external links must be safe ---
  for (const m of html.matchAll(/<a[^>]*target="_blank"[^>]*>/g)) {
    if (!/rel="[^"]*noopener/.test(m[0]))
      problems.push(`${label}: target="_blank" without rel="noopener"`)
  }
}

// --- required files ---
for (const required of ["robots.txt", "og-image.png", "sitemap-index.xml"]) {
  if (!fs.existsSync(path.join(PUBLIC, required)))
    problems.push(`missing ${required}`)
}

notes.push(`pages audited: ${htmlFiles.length}`)

console.log(notes.join("\n"))
if (problems.length) {
  console.log(`\nFAIL — ${problems.length} problem(s):`)
  for (const p of problems) console.log("  -", p)
  process.exit(1)
}
console.log("\nPASS — no problems found.")
