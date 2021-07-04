const express = require('express')

const server = express()

server.get('/', (req,res) => {
    res.send('Hola Hola mundo')
})
server.get('/hola_mundo', (req,res) => {
    res.send('Hola mundo')
})

server.listen(4500)
