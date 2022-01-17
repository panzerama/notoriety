import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CardContext = createContext()

const CardContextProvider = ({ children }) => {
  const [cards, setCards] = useState(null)
  // current card index?
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log('When does this run?')
    axios
      .get('http://localhost:8000/cards')
      .then(response => {
        setTimeout(() => {
          const data = response.data
          setCards(data)
          setLoading(false)
        }, 2000) // simulating network lag
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }, [])

  if (error) {
    return <span>It broke!</span>
  } else if (loading) {
    return <span>Loading...</span>
  } else {
    return (
      <CardContext.Provider value={cards}>
        {children}
      </CardContext.Provider>
    )
  }
}
export default CardContextProvider