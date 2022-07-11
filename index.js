const express = require('express')
const cors = require('cors')
const app = express()
const connect = require('./database/connect')
require('dotenv').config()

const PORT = process.env.PORT || 4000
const URI = process.env.URI

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'My Portfolio API' })
})

app.use('/projects', require('./routes/projects.routes'))

async function start() {
  await connect(URI)
  
  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
  })
}

start()