import express from 'express'
import cors from 'cors'
import cardData from './data/cards.json'


const app = express()
const port = 8002

app.use(express.json())
app.use(cors)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cards', (req, res) => {
  res.send(cardData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
