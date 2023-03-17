import { Link } from '@remix-run/react'
import { Box, Typography, Button } from '@mui/material'
import { GitHubButton, LinkedInButton, EmailButton } from '~/components'

// TODO: make less DRY?

export default function Homepage() {
  return (
    <Box paddingLeft='1rem' paddingBottom='1rem'>
      <Typography variant='h2' color='font.main' fontFamily='Lobster'>
        HOME
      </Typography>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <Typography color='font.dark'>About</Typography>
      </Link>
      <Link to='/projects' style={{ textDecoration: 'none' }}>
        <Typography color='font.dark'>Projects</Typography>
      </Link>
      {/* <Link to='/blog-and-media' style={{ textDecoration: 'none' }}> // TODO: comment in when Blog page is finished.
        <Typography color='font.dark'>Blog & Media</Typography>
      </Link> */}
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
      <GitHubButton />
      <LinkedInButton />
      <EmailButton />
    </Box>
  )
}
