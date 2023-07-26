import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.DEFAULT
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}
