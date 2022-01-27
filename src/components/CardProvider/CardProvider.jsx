import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const [cards, setCards] = useState(cardData)

  useEffect(() => {
    console.log('When does this run?')
    fetch('http://localhost:8000/cards')
    .then(response => response.json())
    .then (responseJson => {setTimeout(2000, setCards(responseJson))
  }, [])

  const nextCardHandler = () => {
    if (index < cards.length - 1) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }

  const backCardHandler = () => {
    if (index > 0) {
      setIndex(index-1)
    } else {
      setIndex(0)
    }
  }
  
  /**
   * Week Three Assignment
   * Part One - Your assignment this week is to create a 'back' button that will
   * allow the user to return to the previous card. 
   * Part Two - The next button currently cycles through all of the available
   * cards. After adding the back button, modify the behavior so that the back
   * button is hidden when the first card is displayed and the next button is
   * hidden when the last card in the set is displayed.
   * Part Three - After our livecoding session on making a dynamic request using
   * the useEffect hook try replicating what we did on your own. To accomplish
   * this you should first create a route in Express that returns the card data
   * (the same data in src/data/cards.json) and test it using curl or Postman.
   * Next, make a request of the Express service from the useEffect hook.
   */
  return <Card cardContent={{ cardAdvanceHandler: nextCardHandler, ...cardData[index] }}></Card>
}

export default CardProvider