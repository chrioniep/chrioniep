import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'your@email.com', type: 'email' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
    </div>
  ),
}

export const Password: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { placeholder: 'Unavailable', disabled: true },
}
