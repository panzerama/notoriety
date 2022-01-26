import express from 'express'

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

// Assignment: Add a new route here for GET /cards

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}!`)
})
