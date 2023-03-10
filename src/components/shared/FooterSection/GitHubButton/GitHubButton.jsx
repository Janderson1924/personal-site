import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'

export const GitHubButton = () => {
  return (
    <IconButton
      href='https://github.com/Janderson1924'
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
      <GitHubIcon />
    </IconButton>
  )
}
