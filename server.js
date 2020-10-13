require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'hello world'
    })
})

const birdsController = require('./controllers/angry-birds-data')
app.use('/angry-birds', birdsController)

app.listen(PORT, () => {
    console.log(`express listening on port ${PORT}`)
})