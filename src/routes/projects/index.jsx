import { Link } from '@remix-run/react'
import { Typography } from '@mui/material'

export default function Projects() {
  return (
    <main>
      <Typography variant='h3' color='font.dark'>
        PROJECTS
      </Typography>
      <Link to='/'>Home</Link>
    </main>
  )
}
