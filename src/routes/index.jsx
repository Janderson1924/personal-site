import { Link } from '@remix-run/react'
import Button from '@mui/material/Button'

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
      <Button variant='contained'>Test Button</Button>
    </div>
  )
}

// TODO: make less DRY