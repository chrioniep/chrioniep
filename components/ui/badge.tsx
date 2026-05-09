import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-[8px] border-[0.5px] px-2 py-0.5 font-sans text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:  'border-border bg-bg-soft text-muted',
        accent:   'border-accent/30 bg-accent/10 text-accent',
        success:  'border-success/30 bg-success/10 text-success',
        error:    'border-error/30 bg-error/10 text-error',
        outline:  'border-border bg-transparent text-fg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
