import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const [cards, setCards] = useState(cardData)
  const [showBackButton, setShowBackButton] = useState(false)
  const [showNextButton, setShowNextButton] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/cards')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
  })

  const previousCardHandler = () => {
    if(index - 1 === 0){
      setIndex(index - 1)
      setShowBackButton(false)
    } else {
      setIndex(index - 1)
      setShowNextButton(true)
    }
  }
  const nextCardHandler = () => {
    if (index + 1 === cards.length -1 ) {
      setIndex(index+1)
      setShowNextButton(false)
    } else {
      setIndex(index + 1)
      setShowBackButton(true) 
    }
  }
  
  return <Card cardContent={{ showNextButton, showBackButton, cardPreviousHandler: previousCardHandler, cardAdvanceHandler: nextCardHandler, ...cardData[index] }}></Card>
}

export default CardProvider