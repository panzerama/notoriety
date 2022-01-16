import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Flashcard from '../Flashcard/Flashcard'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const [cards, setCards] = useState(null)

  useEffect(() => {
    console.log('When does this run?')
    axios.get('http://localhost:8000/cards').then((response) => {
      setTimeout(() => {
        const data = response.data
        setCards(data)
      }, 2000) // simulating network lag
    })
  }, [])

  const nextCardHandler = () => {
    if (index < cards.length - 1) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }
  
  if (!cards) {
    return <span>Loading...</span>
  } else {
    return <Flashcard cardContent={{ cardAdvanceHandler: nextCardHandler, ...cards[index] }}></Flashcard>
  }
}

export default CardProvider