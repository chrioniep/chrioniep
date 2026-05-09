'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'rest'

export interface ConcentricBreathProps {
  phase?: BreathPhase
  /** Render animated (breathing session) or static (logo mark / icon use) */
  animated?: boolean
  size?: number
  className?: string
}

/* Phase → ring scale targets.
   Outermost ring has the largest movement; inner rings follow at lag. */
const phaseConfig: Record<BreathPhase, { outer: number; mid: number; inner: number; opacity: number }> = {
  inhale:  { outer: 1.25, mid: 1.15, inner: 1.05, opacity: 0.9 },
  hold:    { outer: 1.25, mid: 1.15, inner: 1.05, opacity: 1.0 },
  exhale:  { outer: 0.85, mid: 0.90, inner: 0.95, opacity: 0.6 },
  rest:    { outer: 1.00, mid: 1.00, inner: 1.00, opacity: 0.5 },
}

const transitionFor: Record<BreathPhase, { duration: number; ease: string }> = {
  inhale: { duration: 4, ease: 'easeInOut' },
  hold:   { duration: 0.3, ease: 'easeOut' },
  exhale: { duration: 6, ease: 'easeInOut' },
  rest:   { duration: 1.5, ease: 'easeOut' },
}

export function ConcentricBreath({
  phase = 'rest',
  animated = true,
  size = 160,
  className,
}: ConcentricBreathProps) {
  const prefersReduced = useReducedMotion()
  const shouldAnimate = animated && !prefersReduced

  const config = phaseConfig[phase]
  const transition = transitionFor[phase]

  const cx = size / 2
  const cy = size / 2
  const baseOuter = size * 0.44
  const baseMid   = size * 0.30
  const baseInner = size * 0.16

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      aria-label={animated ? `Breathing: ${phase}` : undefined}
      className={cn('text-accent', className)}
    >
      {/* Outer ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={baseOuter}
        stroke="currentColor"
        strokeWidth="0.75"
        opacity={config.opacity * 0.4}
        animate={shouldAnimate ? { r: baseOuter * config.outer, opacity: config.opacity * 0.4 } : undefined}
        transition={shouldAnimate ? transition : undefined}
      />

      {/* Middle ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={baseMid}
        stroke="currentColor"
        strokeWidth="0.75"
        opacity={config.opacity * 0.65}
        animate={shouldAnimate ? { r: baseMid * config.mid, opacity: config.opacity * 0.65 } : undefined}
        transition={shouldAnimate ? { ...transition, delay: 0.1 } : undefined}
      />

      {/* Inner ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={baseInner}
        stroke="currentColor"
        strokeWidth="1"
        opacity={config.opacity * 0.9}
        animate={shouldAnimate ? { r: baseInner * config.inner, opacity: config.opacity * 0.9 } : undefined}
        transition={shouldAnimate ? { ...transition, delay: 0.2 } : undefined}
      />

      {/* Centre dot */}
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.025}
        fill="currentColor"
        opacity={config.opacity}
      />
    </svg>
  )
}
