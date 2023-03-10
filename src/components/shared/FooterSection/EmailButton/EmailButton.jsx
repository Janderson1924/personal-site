import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import { IconButton } from '@mui/material'

export const EmailButton = () => {
  return (
    <IconButton
      href='/contact'
      sx={{
        color: 'font.main',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'secondary.main',
          cursor: 'pointer'
        }
      }}
    >
      <EmailIcon />
    </IconButton>
  )
}
