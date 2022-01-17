import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

import { CardContext } from '../CardProvider/CardContextProvider'

const Flashcard = () => {
  const cards = useContext(CardContext)
  const { cardIdx } = useParams()
  const { front_image, front_text, back_image, back_text } = cards[cardIdx]

  const [isFront, setIsFront] = useState(true)
  const [content, setContent] = useState({
    image: front_image,
    text: front_text
  })

  useEffect(() => {
    if (isFront) {
      setContent({
        image: front_image,
        text: front_text
      })
    } else {
      setContent({
        image: back_image,
        text: back_text
      })
    }
  }, [isFront, front_text, back_text, front_image, back_image])

  const flipHandler = () => {
    setIsFront(!isFront)
  }

  return (
    <Box sx={{ width: '100%', mt: 8, display: 'flex', justifyContent: 'space-around'}}>
      <Card sx={{ width: '40vw' }} elevation={3}>
        { content.image && <CardMedia
          component="img"
          height="200"
          image={content.image} />}
        <CardContent>
          <Typography>{content.text}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" onClick={() => flipHandler()}>
            Flip
          </Button>
          <Button
            component={Link}
            to={`/cards/${(cardIdx + 1) % cards.length}`}
            variant="outlined"
          >
            Next - link to cards/next index % length
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Flashcard
