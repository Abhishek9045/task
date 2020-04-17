const express = require('express')
const SERVER_PORT = process.env.port || 3333
const { db } = require('./db')
const todoRoute = require('./routes/todos')
const noteRoute = require('./routes/notes')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/Assets', express.static(__dirname + 'Assets'))
app.use('/', express.static(__dirname + '/public'))

app.use('/todos',todoRoute)
app.use('/notes',noteRoute)


db.sync()
  .then(() => {
    app.listen(SERVER_PORT)
  })
  .catch((err) => {
    console.error(err)
  })