import { Link } from '@remix-run/react'
import { ThemeProvider, Box, Typography, Button } from '@mui/material'
import { theme } from '../assets/theme'

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='primary.light' paddingLeft='1rem' paddingBottom='1rem'>
        <Typography variant='h2' color='font.main'>
          HOME
        </Typography>
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <Typography color='font.dark'>About</Typography>
        </Link>
        <Link to='/projects' style={{ textDecoration: 'none' }}>
          <Typography color='font.dark'>Projects</Typography>
        </Link>
        <Link to='/blog-and-media' style={{ textDecoration: 'none' }}>
          <Typography color='font.dark'>Blog & Media</Typography>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <Typography color='font.dark'>Contact</Typography>
        </Link>
        <Button
          href='https://github.com/Janderson1924/personal-site'
          target='blank'
          variant='contained'
          color='secondary'
        >
          <Typography color='font.main'>Test Button</Typography>
        </Button>
      </Box>
    </ThemeProvider>
  )
}

// TODO: make less DRY
