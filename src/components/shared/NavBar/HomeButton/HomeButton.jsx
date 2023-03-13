import React from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { IconButton } from '@mui/material'

export const HomeButton = () => {
  return (
    <IconButton href='/' sx={{ color: 'font.main', cursor: 'pointer' }}>
      <FlashOnIcon />
    </IconButton>
  )
}
