const express = require('express')
const server = express()
const route = require('./route.js')
const path = require('path')

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views')) // __dirname = src/
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(route)
server.listen(3000, () => console.log('Servidor rodando na porta 3000'))
