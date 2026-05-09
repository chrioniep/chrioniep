import type { Meta, StoryObj } from '@storybook/react'
import { ConcentricBreath } from '@/components/brand/ConcentricBreath'

const meta: Meta<typeof ConcentricBreath> = {
  title: 'Brand/ConcentricBreath',
  component: ConcentricBreath,
  tags: ['autodocs'],
  argTypes: {
    phase: {
      control: 'select',
      options: ['inhale', 'hold', 'exhale', 'rest'],
    },
    animated: { control: 'boolean' },
    size: { control: { type: 'range', min: 40, max: 320, step: 8 } },
  },
}

export default meta
type Story = StoryObj<typeof ConcentricBreath>

export const Rest: Story = {
  args: { phase: 'rest', animated: false, size: 160 },
}

export const Inhale: Story = {
  args: { phase: 'inhale', animated: false, size: 160 },
}

export const Hold: Story = {
  args: { phase: 'hold', animated: false, size: 160 },
}

export const Exhale: Story = {
  args: { phase: 'exhale', animated: false, size: 160 },
}

export const Animated: Story = {
  args: { phase: 'inhale', animated: true, size: 160 },
}

export const Small: Story = {
  name: 'Small — icon use',
  args: { phase: 'rest', animated: false, size: 48 },
}
