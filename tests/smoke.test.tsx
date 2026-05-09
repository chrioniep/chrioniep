import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/brand/Wordmark'
import { Badge } from '@/components/ui/badge'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Begin session</Button>)
    expect(screen.getByRole('button', { name: 'Begin session' })).toBeInTheDocument()
  })

  it('is disabled when prop set', () => {
    render(<Button disabled>Begin session</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})

describe('Wordmark', () => {
  it('renders the wordmark text', () => {
    render(<Wordmark />)
    expect(screen.getByText('onion')).toBeInTheDocument()
  })

  it('renders dot variant', () => {
    const { container } = render(<Wordmark variant="dot" />)
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
})

describe('Badge', () => {
  it('renders with text', () => {
    render(<Badge>Layer 1</Badge>)
    expect(screen.getByText('Layer 1')).toBeInTheDocument()
  })
})
