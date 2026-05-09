import type { Meta, StoryObj } from '@storybook/react'
import { LayerProgress } from '@/components/brand/LayerProgress'

const meta: Meta<typeof LayerProgress> = {
  title: 'Brand/LayerProgress',
  component: LayerProgress,
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: { type: 'range', min: 40, max: 200, step: 8 } },
  },
}

export default meta
type Story = StoryObj<typeof LayerProgress>

export const Empty: Story = {
  args: { progress: 0, label: 'Preparing document…', size: 80 },
}

export const FirstLayer: Story = {
  args: { progress: 20, label: 'Parsing structure…', size: 80 },
}

export const Halfway: Story = {
  args: { progress: 50, label: 'Extracting concepts…', size: 80 },
}

export const ThirdLayer: Story = {
  args: { progress: 80, label: 'Building recall queue…', size: 80 },
}

export const Complete: Story = {
  args: { progress: 100, label: 'Ready.', size: 80 },
}

export const Interactive: Story = {
  args: { progress: 45, label: 'Processing…', size: 120 },
}
