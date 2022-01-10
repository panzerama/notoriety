import React from 'react'
import Tile from '../Tile/Tile'

const Landing = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Tile title="Cards" link="/cards" />
      <Tile title="Decks" link="/decks" />
    </div>
  )
}

export default Landing