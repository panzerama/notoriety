import { Box } from '@mui/system'
import React from 'react'

import Tile from '../Tile/Tile'

const MultiCard = ({ cards }) => {
  const tileItems = cards.map((card, cardIdx) => {
    return {
      title: card.front_text.slice(0, 10) ?? cardIdx.toString(),
      link: `/cards/${cardIdx}`
    }
  })
  const tiles = tileItems.map((tileItem) => {
    return <Tile title={tileItem.title} link={tileItem.link} />
  })

  return (
    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      {tiles}
    </Box>
    )
}

export default MultiCard