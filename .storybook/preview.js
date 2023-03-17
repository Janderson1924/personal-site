import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../src/assets/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'purple',
    values: [
      {
        name: 'purple',
        value: '#4D194D'
      }
    ]
  }
}

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]
