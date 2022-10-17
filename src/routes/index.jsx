import { Link } from '@remix-run/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

const theme = createTheme({
  palette: {
    primary: {
      // Purples
      light: '#4D194D',
      main: '#3E1F47',
      dark: '#312244'
    },
    secondary: {
      // Greens
      dark: '#144552',
      main: '#0B525B',
      light: '#065A60'
    }
  }
})

export default function Homepage() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/blog-and-media'>Blog & Media</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='secondary'>
          Test Button
        </Button>
      </ThemeProvider>
    </div>
  )
}

// TODO: make less DRY
