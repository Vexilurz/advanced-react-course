import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const SecondaryDark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
