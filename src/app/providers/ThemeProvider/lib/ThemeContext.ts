import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function dummySetTheme (theme: Theme): void {
  throw new Error('setTheme is not defined!')
}

export interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: dummySetTheme
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
