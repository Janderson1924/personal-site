import { Link } from '@remix-run/react'
import { Box, Typography } from '@mui/material'
import { GitHubButton, LinkedInButton, EmailButton } from '~/components'
import { HeroContactButton } from '~/components/homepage/components'

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
      <HeroContactButton />
      <GitHubButton />
      <LinkedInButton />
      <EmailButton />
    </Box>
  )
}
