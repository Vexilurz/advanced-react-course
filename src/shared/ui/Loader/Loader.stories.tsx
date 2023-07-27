import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from 'shared/ui/Loader/Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  args: {
  }
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}

export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
