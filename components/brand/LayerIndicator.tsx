'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LayerIndicatorProps {
  /** Total number of reading passes for this document */
  total: number
  /** Current pass (1-indexed) */
  current: number
  /** Show numeric labels */
  labeled?: boolean
  className?: string
}

/**
 * Shows which reading layer (pass) the session is on.
 * Rendered as a row of concentric-ring glyphs — completed, active, future.
 * Used in the reading session header only.
 */
export function LayerIndicator({
  total,
  current,
  labeled = false,
  className,
}: LayerIndicatorProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Layer ${current} of ${total}`}
      className={cn('flex items-center gap-2', className)}
    >
      {Array.from({ length: total }, (_, i) => {
        const layer = i + 1
        const isComplete = layer < current
        const isActive   = layer === current
        const isFuture   = layer > current

        return (
          <LayerPip
            key={layer}
            state={isComplete ? 'complete' : isActive ? 'active' : 'future'}
            label={labeled ? String(layer) : undefined}
          />
        )
      })}
    </div>
  )
}

/* ─── Pip ─── */

type PipState = 'complete' | 'active' | 'future'

interface LayerPipProps {
  state: PipState
  label?: string
}

function LayerPip({ state, label }: LayerPipProps) {
  return (
    <span className="relative inline-flex items-center justify-center">
      <LayerRingIcon state={state} />
      {label && (
        <span
          className={cn(
            'absolute font-mono text-[8px] leading-none',
            state === 'future' ? 'text-faint' : state === 'active' ? 'text-accent' : 'text-muted',
          )}
        >
          {label}
        </span>
      )}
    </span>
  )
}

/* ─── Ring SVG ─── */

const SIZE = 20

function LayerRingIcon({ state }: { state: PipState }) {
  const cx = SIZE / 2
  const cy = SIZE / 2

  const colorClass = {
    complete: 'text-muted',
    active:   'text-accent',
    future:   'text-faint',
  }[state]

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      aria-hidden="true"
      className={cn('transition-colors duration-200', colorClass)}
    >
      {/* Outermost ring — always visible */}
      <circle cx={cx} cy={cy} r={8.5} stroke="currentColor" strokeWidth="0.75" />

      {/* Middle ring — visible when active or complete */}
      {state !== 'future' && (
        <circle
          cx={cx}
          cy={cy}
          r={5.5}
          stroke="currentColor"
          strokeWidth="0.75"
          opacity={state === 'complete' ? 1 : 0.7}
        />
      )}

      {/* Inner ring — visible only when complete */}
      {state === 'complete' && (
        <circle cx={cx} cy={cy} r={2.5} fill="currentColor" opacity={0.6} />
      )}

      {/* Centre dot — always visible when active */}
      {state === 'active' && (
        <circle cx={cx} cy={cy} r={2.5} fill="currentColor" />
      )}
    </svg>
  )
}
