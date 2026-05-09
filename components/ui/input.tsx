import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-9 w-full rounded-[8px]',
          'border-[0.5px] border-border bg-bg-elev',
          'px-3 py-1',
          'font-sans text-sm text-fg',
          'placeholder:text-faint',
          'transition-colors duration-100',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent',
          'disabled:cursor-not-allowed disabled:opacity-40',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg',
          className,
        )}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
