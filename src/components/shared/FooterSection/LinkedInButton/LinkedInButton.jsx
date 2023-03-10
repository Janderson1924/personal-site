import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton } from '@mui/material'

export const LinkedInButton = () => {
  return (
    <IconButton
      href='https://www.linkedin.com/in/janderson1924/'
      target='blank'
      sx={{
        color: 'font.main',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'secondary.main',
          cursor: 'pointer'
        }
      }}
    >
      <LinkedInIcon />
    </IconButton>
  )
}
