var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const benchmark = require('./benchmark')

server.listen(1234)

benchmark(io)