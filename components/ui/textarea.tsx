import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[80px] w-full rounded-[8px]',
          'border-[0.5px] border-border bg-bg-elev',
          'px-3 py-2',
          'font-sans text-sm text-fg leading-relaxed',
          'placeholder:text-faint',
          'resize-none',
          'transition-colors duration-100',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent',
          'disabled:cursor-not-allowed disabled:opacity-40',
          className,
        )}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
