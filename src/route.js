const express = require('express')
const route = express.Router()
const question_controller = require('./controllers/question_controller')
const room_controller = require('./controllers/room_controller')

route.get('/', (req, res) => {
  res.render('index', { page: 'enter-room' })
})

route.get('/create-pass', (req, res) => {
  res.render('index', { page: 'create-pass' })
})

route.post('/create-room', room_controller.create)
route.get('/room/:room', room_controller.open)
route.post('/enterroom', room_controller.enter)

route.post('/question/create/:room', question_controller.create)
route.post('/question/:room/:question/:action', question_controller.index)

module.exports = route
