import type { Meta, StoryObj } from '@storybook/react'
import { LayerIndicator } from '@/components/brand/LayerIndicator'

const meta: Meta<typeof LayerIndicator> = {
  title: 'Brand/LayerIndicator',
  component: LayerIndicator,
  tags: ['autodocs'],
  argTypes: {
    total:   { control: { type: 'range', min: 1, max: 5 } },
    current: { control: { type: 'range', min: 1, max: 5 } },
    labeled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof LayerIndicator>

export const FirstLayer: Story = {
  args: { total: 3, current: 1 },
}

export const SecondLayer: Story = {
  args: { total: 3, current: 2 },
}

export const Complete: Story = {
  args: { total: 3, current: 4 },
}

export const WithLabels: Story = {
  args: { total: 3, current: 2, labeled: true },
}

export const FiveLayers: Story = {
  args: { total: 5, current: 3 },
}
