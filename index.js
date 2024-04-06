// Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// Middleware
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})