const express = require('express')
const cors = require('cors')
const cards = require('./data/cards.json')
// Assignment: import the decks info here

const app = express()
const port = 8000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/cards', (req, res) => {
  res.json(cards)
})

app.get('/cards/:id', (req, res) => {
  const cardsForDeck = cards.filter(card => card.deck_id.toString() === req.params.id )
  res.json(cardsForDeck)
})

// Assignment: create a decks route that returns the decks info imported above

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
