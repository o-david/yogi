const express =require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello, this is the root route')
})
router.get('/whatever', (req, res) => {
    res.send('Hello, whatever')
})


module.exports= router