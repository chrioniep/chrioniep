import type { Meta, StoryObj } from '@storybook/react'
import { Wordmark } from '@/components/brand/Wordmark'

const meta: Meta<typeof Wordmark> = {
  title: 'Brand/Wordmark',
  component: Wordmark,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'display'],
    },
    variant: {
      control: 'select',
      options: ['text', 'dot', 'mark'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Wordmark>

export const InApp: Story = {
  name: 'In-app (text only)',
  args: { size: 'md', variant: 'text' },
}

export const MarketingDot: Story = {
  name: 'Marketing (with dot)',
  args: { size: 'lg', variant: 'dot' },
}

export const WithMark: Story = {
  name: 'With concentric mark',
  args: { size: 'md', variant: 'mark' },
}

export const DisplayScale: Story = {
  name: 'Display — marketing hero',
  args: { size: 'display', variant: 'dot' },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <Wordmark size="sm" variant="text" />
      <Wordmark size="md" variant="text" />
      <Wordmark size="lg" variant="dot" />
      <Wordmark size="display" variant="dot" />
    </div>
  ),
}
