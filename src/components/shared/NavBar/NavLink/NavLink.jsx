import React from 'react'
import Button from '@mui/material/Button'

export const NavLink = ({ children }) => {
  return (
    <Button
      sx={{
        my: 4,
        mx: 2,
        color: 'font.main',
        letterSpacing: '0.1em',
        fontFamily: 'Climate Crisis',
        fontSize: '0.75rem',
        '&:hover': {
          color: 'secondary.main',
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </Button>
  )
}
