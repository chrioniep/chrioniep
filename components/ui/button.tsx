import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap',
    'font-sans text-sm font-medium',
    'transition-colors duration-100',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-40',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-accent text-bg hover:bg-accent/90 active:bg-accent/80',
        ghost:
          'bg-transparent text-fg border-[0.5px] border-border hover:bg-bg-elev active:bg-bg-soft',
        subtle:
          'bg-bg-elev text-fg border-[0.5px] border-border hover:bg-bg-soft active:bg-bg-soft',
        destructive:
          'bg-error/10 text-error border-[0.5px] border-error/20 hover:bg-error/15',
        link:
          'text-accent underline-offset-4 hover:underline h-auto p-0 rounded-none',
      },
      size: {
        sm:   'h-7  px-3  text-xs   rounded-[8px]',
        default: 'h-9  px-4  text-sm   rounded-[8px]',
        lg:   'h-11 px-6  text-base rounded-[8px]',
        icon: 'h-9  w-9            rounded-[8px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
