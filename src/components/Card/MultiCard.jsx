import React from 'react'

import Tile from '../Tile/Tile'

const MultiCard = ({ cards }) => {
  const tiles = cards.map((tileItem) => {
    return <Tile title={tileItem.title} link={tileItem.link} />
  })

  // wrap in a flexbox div
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }

  return <div style={style}>{tiles}</div>
}

export default MultiCard