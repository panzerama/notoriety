import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import TopBar from './components/TopBar/TopBar'
import './App.css'

// TODO add theme elements for color and font

const App = () => {
  return (
    <Box className="wrapper" sx={{ overflow: 'hidden', width: '100vw' }}>
      <TopBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  )
}

export default App
