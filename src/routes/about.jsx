import { Link } from '@remix-run/react'
import { Typography } from '@mui/material'

export default function About() {
  return (
    <main>
      <Typography variant='h3' color='font.dark'>
        ABOUT
      </Typography>
      <Link to='/'>Home</Link>
    </main>
  )
}
