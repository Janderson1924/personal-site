import React from 'react'
import { Button } from '@mui/material'

export const HeroContactButton = () => {
  return (
    <>
      <Button
        href='/contact'
        variant='contained'
        color='secondary'
        size='large'
        sx={{
          textTransform: 'capitalize',
          color: 'font.main',
          fontSize: '1rem',
          fontFamily: 'Climate Crisis',
          borderRadius: '0.75rem',
          py: '0.75rem',
          px: '1.5rem'
        }}
      >
        Get In Touch
      </Button>
    </>
  )
}
