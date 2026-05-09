'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface LayerProgressProps {
  /** Upload/processing progress 0–100 */
  progress: number
  /** Status label shown below the rings */
  label?: string
  size?: number
  className?: string
}

/**
 * Upload and document-processing progress visualised as concentric rings
 * "peeling" inward as progress advances.
 * Three rings fill from outside → inside, tied to progress thirds.
 */
export function LayerProgress({
  progress,
  label,
  size = 80,
  className,
}: LayerProgressProps) {
  const prefersReduced = useReducedMotion()
  const clamped = Math.min(100, Math.max(0, progress))

  const cx = size / 2
  const cy = size / 2

  const rings = [
    { r: size * 0.44, threshold: 0,    fillAt: 33  },  // outermost — first to fill
    { r: size * 0.30, threshold: 33,   fillAt: 66  },
    { r: size * 0.16, threshold: 66,   fillAt: 100 },
  ] as const

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `Upload progress ${clamped}%`}
        className="text-accent"
      >
        {rings.map(({ r, threshold, fillAt }, i) => {
          const ringProgress = Math.min(
            100,
            Math.max(0, ((clamped - threshold) / (fillAt - threshold)) * 100),
          )
          const circumference = 2 * Math.PI * r
          const dashOffset = circumference * (1 - ringProgress / 100)

          return (
            <React.Fragment key={i}>
              {/* Track */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                stroke="currentColor"
                strokeWidth="0.75"
                opacity={0.15}
              />
              {/* Fill */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={r}
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform={`rotate(-90 ${cx} ${cy})`}
                opacity={clamped > threshold ? 1 : 0}
                animate={prefersReduced ? undefined : { strokeDashoffset: dashOffset }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </React.Fragment>
          )
        })}

        {/* Centre dot */}
        <circle
          cx={cx}
          cy={cy}
          r={size * 0.04}
          fill="currentColor"
          opacity={clamped === 100 ? 1 : 0.3}
        />
      </svg>

      {label && (
        <p className="font-sans text-xs text-muted text-center">{label}</p>
      )}
    </div>
  )
}
