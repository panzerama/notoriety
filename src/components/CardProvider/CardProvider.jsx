import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const CardProvider = () => {
  const [cards, setCards] = useState(null)
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
        }, 2000) // This simulates network lag
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
    return <Outlet context={cards} />
  }
}
export default CardProvider