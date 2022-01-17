import React, { useState, useEffect } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

const Flashcard = () => {
  const cards = useOutletContext()
  const { cardIdx } = useParams()
  const idx = parseInt(cardIdx)
  const { front_image, front_text, back_image, back_text } = cards[idx]

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

  const prev = idx > 0 ? idx - 1 : cards.length
  const next = idx < cards.length - 1 ? idx + 1 : 0

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
        <Button
            sx={{ mx: 2 }}
            component={Link}
            to={`/cards/${prev}`}
            variant="outlined"
          >
            Prev
          </Button>
          <Button sx={{ mx: 2 }} variant="outlined" onClick={() => flipHandler()}>
            Flip
          </Button>
          <Button
            sx={{ mx: 2 }}
            component={Link}
            to={`/cards/${next}`}
            variant="outlined"
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Flashcard
