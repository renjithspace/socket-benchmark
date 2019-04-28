const _ = require('lodash')
const moment = require('moment')
const iteration = 10000

function benchmark(io) {
    io.on('connection', function (socket) {
        const start = new Date()
        const emit = () => socket.emit('news', { id: _.uniqueId(), from: 'server', start })
        const emits = _.range(iteration).forEach(() => emit())

        socket.on('news', function(data) {
            console.log({ position: data.id, delay: moment().diff(data.start, 'second') })
        })
    })
}

module.exports = benchmark