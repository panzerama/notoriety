import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const [cards, setCards] = useState(cardData)
  const [showBack, setShowBack] = useState(false)
  const [showFront, setShowFront] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/cards')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
  })

  const previousCardHandler = () => {
    if(index - 1 === 0){
      setIndex(index - 1)
      setShowBack(false)
    } else {
      setIndex(index - 1)
      setShowFront(true)
    }
  }
  const nextCardHandler = () => {
    if (index + 1 === cards.length -1 ) {
      setIndex(index+1)
      setShowFront(false)
    } else {
      setIndex(index + 1)
      setShowBack(true) 
    }
  }
  
  return <Card cardContent={{ showFront, showBack, cardPreviousHandler: previousCardHandler, cardAdvanceHandler: nextCardHandler, ...cardData[index] }}></Card>
}

export default CardProvider