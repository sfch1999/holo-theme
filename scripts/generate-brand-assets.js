/* eslint-disable no-console */
/**
 * Generates the brand raster assets from inline SVG sources:
 *
 *   src/images/icon.png   512x512  — PWA manifest + favicon source
 *   static/og-image.png   1200x630 — Open Graph / Twitter social card
 *   static/favicon.ico    16/32/48 — classic favicon for clients that request
 *                                   /favicon.ico directly (older browsers, RSS
 *                                   readers, link unfurlers, some crawlers)
 *
 * Run with:  node scripts/generate-brand-assets.js
 *
 * The outputs are committed, so this only needs re-running when the mark or
 * the social card copy changes.
 */

const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const INK = "#0E1A2B"
const ACCENT = "#0B655A"
const PAPER = "#FBFBF9"
const LINE = "#E2E5E0"

const root = path.resolve(__dirname, "..")

/** The monogram, matching src/components/brand.js. */
const monogram = (size, radius) => `
  <rect width="${size}" height="${size}" rx="${radius}" fill="${INK}"/>
  <g transform="translate(${size * 0.0625}, ${size * 0.0625}) scale(${
  (size * 0.875) / 32
})">
    <path d="M4 18.5 L10.2 8.2 L16.4 18.5" stroke="#FFFFFF" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M7.1 15.1 H13.3" stroke="#FFFFFF" stroke-width="2.4"
          stroke-linecap="round" fill="none"/>
    <circle cx="19.6" cy="7.4" r="2.4" fill="${ACCENT}"/>
  </g>
`

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  ${monogram(512, 112)}
</svg>`

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${LINE}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${LINE}" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0 H0 V72" fill="none" stroke="url(#fade)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect width="1200" height="330" fill="url(#grid)"/>

  <g transform="translate(88, 92)">
    ${monogram(64, 14)}
  </g>

  <text x="170" y="140" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="34" font-weight="600" fill="${INK}" letter-spacing="-0.5">ABI AI</text>

  <text x="88" y="300" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="60" font-weight="600" fill="${INK}" letter-spacing="-1.6">AI systems and human data</text>
  <text x="88" y="376" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="60" font-weight="600" fill="${INK}" letter-spacing="-1.6">operations built for</text>
  <text x="88" y="452" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="60" font-weight="600" fill="${INK}" letter-spacing="-1.6">real-world deployment.</text>

  <rect x="88" y="516" width="64" height="3" fill="${ACCENT}"/>

  <text x="88" y="566" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="24" font-weight="500" fill="#44526A">abi-ai.com</text>
  <text x="1112" y="566" text-anchor="end"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="24" font-weight="500" fill="#44526A">Meydan Free Zone, Dubai</text>
</svg>`


/**
 * Builds a multi-resolution .ico from PNG buffers.
 *
 * The ICO container can hold PNG data directly (Vista+), so this just writes
 * the 6-byte ICONDIR, one 16-byte ICONDIRENTRY per image, then the PNG bytes.
 * Doing it by hand avoids pulling in a dependency for ~30 lines of format.
 */
function buildIco(pngs) {
  const count = pngs.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: 1 = icon
  header.writeUInt16LE(count, 4)

  const entries = []
  let offset = 6 + count * 16

  pngs.forEach(({ size, data }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0) // 0 means 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2) // palette colours
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += data.length
  })

  return Buffer.concat([header, ...entries, ...pngs.map(p => p.data)])
}

async function main() {
  const iconPath = path.join(root, "src/images/icon.png")
  const ogPath = path.join(root, "static/og-image.png")

  fs.mkdirSync(path.dirname(iconPath), { recursive: true })
  fs.mkdirSync(path.dirname(ogPath), { recursive: true })

  await sharp(Buffer.from(iconSvg)).png().toFile(iconPath)
  console.log("wrote", path.relative(root, iconPath))

  await sharp(Buffer.from(ogSvg)).png({ quality: 90 }).toFile(ogPath)
  console.log("wrote", path.relative(root, ogPath))

  // Classic favicon. Radius is scaled per size so the rounded square keeps its
  // proportions instead of going square at 16px.
  const icoPath = path.join(root, "static/favicon.ico")
  const sizes = [16, 32, 48]
  const pngs = []
  for (const size of sizes) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${monogram(
      size,
      Math.round(size * 0.219)
    )}</svg>`
    pngs.push({ size, data: await sharp(Buffer.from(svg)).png().toBuffer() })
  }
  fs.writeFileSync(icoPath, buildIco(pngs))
  console.log("wrote", path.relative(root, icoPath), `(${sizes.join(", ")}px)`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
