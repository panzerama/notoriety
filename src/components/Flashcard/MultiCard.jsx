import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Box, Button, ButtonGroup } from '@mui/material'

import Tile from '../Tile/Tile'

const MultiCard = () => {
  console.log('[MultiCard]: initializing')
  const cards = useOutletContext()
  const [page, setPage] = useState(0)

  const tileItems = cards.map((card, cardIdx) => {
    let cardTitle = cardIdx.toString()
    if (card.front_text) {
      cardTitle = `${card.front_text.slice(0, 15)}...`
    }
    return {
      title: cardTitle ?? cardIdx.toString(),
      link: `/cards/${cardIdx}`
    }
  })

  const tiles = tileItems.map(tileItem => {
    return <Tile title={tileItem.title} link={tileItem.link} />
  })

  const pages = Math.ceil(tiles.length / 16)
  console.log(`number of pages ${pages} from ${tiles.length / 16}`)

  const paginationHandler = e => {
    console.log(e)
    if (e.target.id === 'next') {
      setPage(page + 1)
    } else {
      setPage(page - 1)
    }
  }

  const start = page * 16
  const end = start + 16

  return (
    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      {tiles.slice(start, end)}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {page > 0 && (
          <Button
            id="back"
            onClick={e => {
              paginationHandler(e)
            }}
          >
            Back
          </Button>
        )}
        <Button disabled>{`${page + 1}`}</Button>
        {(page < pages - 1) && (
          <Button
            id="next"
            onClick={e => {
              paginationHandler(e)
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default MultiCard
