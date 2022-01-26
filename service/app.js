import express from 'express'
import cors from 'cors'
import cardData from './data/cards.json'

const app = express()
const port = 8000

/**
 * We need this middleware to send and receive JSON data easily. We'll cover
 * middleware later
 */
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get example.com/cards
app.get('/cards', (req, res) => { 
  res.send(cardData)
})

//an example of another app.get
// app.get('/goodbye', (req, res) => {
//   res.send('Goodbye World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
