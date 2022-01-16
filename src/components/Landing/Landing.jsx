import React from 'react'
import { Box } from '@mui/material'
import Tile from '../Tile/Tile'

const Landing = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 8 }}>
      <Tile title="Cards" link="/cards" />
      <Tile title="Decks" link="/decks" />
    </Box>
  )
}

export default Landing