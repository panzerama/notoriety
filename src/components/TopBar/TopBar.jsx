import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import './TopBar.css'

const TopBar = () => {
  const buttonClickHandler = (e) => {
    alert('button in top bar tapped')
  }

  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: 'flex', width: '100vw', m: 0 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Notoriety
        </Typography>
        <Button size="large" color="inherit" onClick={() => buttonClickHandler()}>
          Login
        </Button>
        <Button size="large" color="inherit" onClick={buttonClickHandler}>
          About
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
