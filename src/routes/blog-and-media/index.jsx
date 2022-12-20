import { Link } from '@remix-run/react'
import { Typography } from '@mui/material'

export default function BlogAndMedia() {
  return (
    <main>
      <Typography variant='h3' color='font.dark'>
        BLOG & MEDIA
      </Typography>
      <Link to='/'>Home</Link>
    </main>
  )
}
