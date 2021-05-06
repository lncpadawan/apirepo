console.log('it is working')
const express = require('express')

const server = express()

server.use(express.json())

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'Web 41',
    })
})

process.env.PORT

server.listen(process.env.PORT || 5000)