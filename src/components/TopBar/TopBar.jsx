import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Button from '../Button/Button'
import './TopBar.css'

const TopBar = () => {
  const buttonClickHandler = () => {
    console.log('button in top bar tapped')
  }
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: 'flex', width: '100vw', m: 0 }}>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>Notoriety</Typography>
        <ButtonGroup>
          <Button buttonStyle="primary" onClickHandler={buttonClickHandler}>
            Left
          </Button>
          <Button buttonStyle="secondary" onClickHandler={buttonClickHandler}>
            Right
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
