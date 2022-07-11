const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./database/connect')
const auth = require('./middleware/auth.middleware')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const URI = process.env.URI

const app = express()

app.use(bodyParser())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'My Portfolio API' })
})

app.use('/projects', require('./routes/projects.routes'))
app.use('/project', auth, require('./routes/project.routes'))
app.use('/auth', auth, require('./routes/auth.routes'))

app.all('*', (req, res) => {
  res.json({ message: 'invalid url' })
})

connect(URI)

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`)
})