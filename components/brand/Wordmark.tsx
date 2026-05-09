import * as React from 'react'
import { cn } from '@/lib/utils'

/* ─── Concentric rings mark — favicon / sign-in card / app icon use only ─── */

interface ConcentricMarkProps {
  size?: number
  className?: string
}

function ConcentricMark({ size = 20, className }: ConcentricMarkProps) {
  const r1 = size * 0.14  // innermost ring
  const r2 = size * 0.35
  const r3 = size * 0.46  // outermost, leaves 1px margin
  const cx = size / 2
  const cy = size / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx={cx} cy={cy} r={r1} stroke="currentColor" strokeWidth="0.75" />
      <circle cx={cx} cy={cy} r={r2} stroke="currentColor" strokeWidth="0.75" />
      <circle cx={cx} cy={cy} r={r3} stroke="currentColor" strokeWidth="0.75" />
    </svg>
  )
}

/* ─── Size map — intentionally limited to the four scale steps ─── */

const sizeClass: Record<WordmarkSize, string> = {
  sm:      'text-xl',        // 20px
  md:      'text-[28px]',    // 28px
  lg:      'text-[40px]',    // 40px
  display: 'text-[64px]',    // 64px
}

/* The mark icon scales relative to the wordmark size */
const markSize: Record<WordmarkSize, number> = {
  sm: 16, md: 22, lg: 32, display: 52,
}

export type WordmarkSize    = 'sm' | 'md' | 'lg' | 'display'
export type WordmarkVariant = 'text' | 'dot' | 'mark'

export interface WordmarkProps {
  size?: WordmarkSize
  /** text — wordmark only (default, in-app)
   *  dot  — with amber dot (marketing surfaces)
   *  mark — with concentric-ring icon (favicon, sign-in card, app icon) */
  variant?: WordmarkVariant
  className?: string
}

export function Wordmark({ size = 'md', variant = 'text', className }: WordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-editorial leading-none text-fg select-none',
        sizeClass[size],
        className,
      )}
    >
      {variant === 'mark' && (
        <ConcentricMark
          size={markSize[size]}
          className="text-accent shrink-0"
        />
      )}
      <span>onion</span>
      {variant === 'dot' && (
        <span className="text-accent" aria-hidden="true">·</span>
      )}
    </span>
  )
}
