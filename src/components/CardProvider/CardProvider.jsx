import React, { useState } from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const nextCardHandler = () => {
    if (index < cardData.length - 1) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }

  // fetch cards

  
  
  return <Card cardContent={{ cardAdvanceHandler: nextCardHandler, ...cardData[index] }}></Card>
}

export default CardProvider