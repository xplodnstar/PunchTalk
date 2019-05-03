const io = require('socket.io')
const init = require('./chat/init')

io.on('connection', init)

module.exports = io  