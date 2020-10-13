const express = require('express')
const router = express.Router()
const birds = require('../models/angry-birds-data')

router.get('/', (req, res) => {
    res.json({
        status: 200,
        birds: birds
    })
})

router.post('/', (req, res) => {
    const bird = req.body
    birds.push(bird)
    res.json({
        status: 200,
        bird: 'data received'
    })
})

router.get('/:index', (req, res) => {
    res.json({
        status: 200,
        bird: birds[req.params.index]
    })
})

router.put('/:index', (req, res) => {
    birds[req.params.index] = req.body
    res.json({
        status: 200,
        bird: birds[req.params.index]
    })
})

router.delete('/:index', (req, res) => {
    birds.splice(req.params.index, 1)
    res.json({
        status: 200,
        msg: 'angry bird removed'
    })
})

module.exports = router