import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'

const Flashcard = props => {
  // WORKITEM image alt text from data
  const {
    front_text,
    front_image,
    back_text,
    back_image,
    cardAdvanceHandler
  } = props.cardContent

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
      <Card sx={{ maxWidth: '40vw' }} elevation={3}>
        <CardMedia image={content.image} />
        <CardContent>
          <Typography>{content.text}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={() => flipHandler()}>
            Flip
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              cardAdvanceHandler()
            }}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

Flashcard.propTypes = {
  cardContent: PropTypes.exact({
    card_id: PropTypes.string,
    front_text: PropTypes.string,
    front_image: PropTypes.string,
    back_text: PropTypes.string,
    back_image: PropTypes.string,
    correct: PropTypes.number
  })
}

export default Flashcard
