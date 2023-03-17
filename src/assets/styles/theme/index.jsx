import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      // Purples
      light: '#4D194D',
      main: '#3E1F47',
      dark: '#312244'
    },
    secondary: {
      // Greens
      light: '#006466',
      main: '#0b525b',
      dark: '#1b3a4b'
    },
    font: {
      // Font Colors (eggshell, purple(light/dark))
      light: '#e8e1e9',
      main: '#f0ead6',
      dark: '#c6b5c9'
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Lobster', 'Climate Crisis'].join(',')
  }
})
