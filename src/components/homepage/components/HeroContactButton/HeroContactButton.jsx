import React from 'react'
import { Button } from '@mui/material'

export const HeroContactButton = () => {
  return (
    <Button
      href='/contact'
      variant='contained'
      color='secondary'
      sx={{ fontSize: '0.5rem', color: 'font.main' }}
    >
      Get In Touch
    </Button>
  )
}
