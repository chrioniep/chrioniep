import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'subtle', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Begin session', variant: 'default', size: 'default' },
}

export const Ghost: Story = {
  args: { children: 'Skip', variant: 'ghost' },
}

export const Subtle: Story = {
  args: { children: 'View details', variant: 'subtle' },
}

export const Destructive: Story = {
  args: { children: 'Delete course', variant: 'destructive' },
}

export const LinkVariant: Story = {
  args: { children: 'Learn more', variant: 'link' },
}

export const Small: Story = {
  args: { children: 'Done', size: 'sm' },
}

export const Large: Story = {
  args: { children: 'Upload document', size: 'lg' },
}

export const Disabled: Story = {
  args: { children: 'Begin session', disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Begin</Button>
      <Button variant="ghost">Skip</Button>
      <Button variant="subtle">Details</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="link">Learn more</Button>
    </div>
  ),
}
