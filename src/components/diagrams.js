import * as React from "react"

const INK = "#0E1A2B"
const INK_SOFT = "#5E6C82"
const ACCENT = "#0B655A"
const LINE = "#E2E5E0"
const PAPER = "#FFFFFF"

const stages = [
  {
    title: "Domain experts",
    detail: "Recruited, calibrated, and measured",
  },
  {
    title: "Task design & rubrics",
    detail: "Specification, edge cases, worked examples",
  },
  {
    title: "Evaluation & preference data",
    detail: "Gold sets, agreement, audit sampling",
  },
  {
    title: "Model behaviour",
    detail: "Regressions and capability gaps identified",
  },
]

/**
 * The human-data feedback loop: how expert judgement becomes model improvement.
 *
 * This is the actual shape of the work described on the Capabilities page, not
 * decoration — which is why it carries a real text alternative rather than
 * being hidden from assistive technology.
 */
export const HumanDataLoop = ({ className = "" }) => {
  const boxX = 8
  const boxW = 268
  const boxH = 62
  const gap = 34
  const top = 10

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 360 396"
        className="h-auto w-full"
        role="img"
        aria-labelledby="loop-title loop-desc"
      >
        <title id="loop-title">The human-data feedback loop</title>
        <desc id="loop-desc">
          Domain experts feed into task design and rubrics, which produce
          evaluation and preference data, which surfaces model behaviour —
          regressions and capability gaps. Findings feed back to the experts,
          closing the loop.
        </desc>

        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {stages.map((stage, i) => {
          const y = top + i * (boxH + gap)
          return (
            <g key={stage.title}>
              <rect
                x={boxX}
                y={y}
                width={boxW}
                height={boxH}
                rx="8"
                fill={PAPER}
                stroke={LINE}
              />
              <text
                x={boxX + 18}
                y={y + 26}
                fontSize="13.5"
                fontWeight="600"
                fill={INK}
              >
                {stage.title}
              </text>
              <text x={boxX + 18} y={y + 44} fontSize="11" fill={INK_SOFT}>
                {stage.detail}
              </text>

              {i < stages.length - 1 ? (
                <line
                  x1={boxX + 26}
                  y1={y + boxH + 5}
                  x2={boxX + 26}
                  y2={y + boxH + gap - 5}
                  stroke={ACCENT}
                  strokeWidth="1.4"
                  markerEnd="url(#arrow)"
                />
              ) : null}
            </g>
          )
        })}

        {/* Feedback path: last stage back up to the first. */}
        <path
          d={`M ${boxX + boxW} ${top + 3 * (boxH + gap) + boxH / 2}
              H 316
              a 12 12 0 0 0 12 -12
              V ${top + boxH / 2 + 12}
              a 12 12 0 0 0 -12 -12
              H ${boxX + boxW}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.4"
          strokeDasharray="4 4"
          markerEnd="url(#arrow)"
        />
        <text
          x="334"
          y={top + 2 * (boxH + gap)}
          fontSize="10.5"
          fill={ACCENT}
          fontWeight="600"
          textAnchor="middle"
          transform={`rotate(90 334 ${top + 2 * (boxH + gap)})`}
        >
          FEEDBACK LOOP
        </text>
      </svg>
    </figure>
  )
}

/**
 * Small hairline mark used to add texture to section corners without
 * resorting to stock imagery. Purely decorative.
 */
export const CornerTicks = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M0 0 H16 M0 0 V16"
      stroke={ACCENT}
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M32 0 V8 M48 0 V8 M0 32 H8 M0 48 H8" stroke={LINE} strokeWidth="1.5" fill="none" />
  </svg>
)
