const express = require('express')
const cors = require('cors')
const connect = require('./database/connect')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const URI = process.env.URI

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'My Portfolio API' })
})

app.use('/projects', require('./routes/projects.routes'))

app.all('*', (req, res) => {
  res.json({ message: 'invalid url' })
})

connect(URI)

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`)
})