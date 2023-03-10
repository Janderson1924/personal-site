import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const pages = ['About', 'Projects', 'Blog & Media', 'Contact']

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = (event) => {
    setIsMenuOpen(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <AppBar position='fixed' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* what do the above props do? */}
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            JUSTIN
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { md: 'flex-end' }
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              justifyContent: { xs: 'flex-start' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            JUSTIN
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: { xs: 'flex-end' }
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar' // what do these do?
              aria-haspopup='true'
              onClick={handleOpenMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={isMenuOpen}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(isMenuOpen)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
