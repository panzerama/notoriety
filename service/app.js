const express = require('express')
const cards = require('./data/cards.json')
// import the decks info here

const app = express()
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cards', (req, res) => {
  res.json(cards)
})

// DEMO implement app.get cards from a deck id
app.get('/cards/:id', (req, res) => {
  res.statusCode(503)
})

// create a decks route that returns the decks info imported above

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
