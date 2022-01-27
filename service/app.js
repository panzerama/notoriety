import express from 'express'
import express from './data/cards.json'

const app = express()
const port = 8000

/**
 * We need this middleware to send and receive JSON data easily. We'll cover
 * middleware later
 */
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cards', (req, res) => {
  res.send('Howdy!')
})

// Assignment: Add a new route here for GET /cards

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
