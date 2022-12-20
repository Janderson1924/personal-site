import { Link } from '@remix-run/react'
import { Typography } from '@mui/material'

export default function Contact() {
  return (
    <main>
      <Typography variant='h3' color='font.dark'>
        CONTACT
      </Typography>
      <Link to='/'>Home</Link>
    </main>
  )
}
