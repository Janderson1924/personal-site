import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import { NavLink } from './NavLink'
import { HomeButton } from './HomeButton'

// const pages = ['About', 'Projects', 'Blog & Media', 'Contact'] // TODO: comment in when Blog page is finished.
const pages = ['About', 'Projects', 'Contact']

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = (event) => {
    setIsMenuOpen(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  // TODO: remove dropshadow from NavBar
  // TODO: update dropdown menu color

  return (
    <AppBar position='fixed' color='transparent'>
      {/* what the below props do? */}
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* DESKTOP VIEW --> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HomeButton />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { md: 'flex-end' }
            }}
          >
            {pages.map((page) => (
              <NavLink onClick={handleCloseMenu} key={page}>
                {page}
              </NavLink>
            ))}
          </Box>

          {/* MOBILE VIEW --> */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <HomeButton />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: { xs: 'flex-end' }
            }}
          >
            <IconButton
              size='large'
              aria-controls='menu-appbar' // what do these do?
              aria-haspopup='true'
              onClick={handleOpenMenu}
              sx={{ color: 'font.main' }}
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <NavLink key={page} onClick={handleCloseMenu}>
                  {page}
                </NavLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
