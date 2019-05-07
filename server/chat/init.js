const initSocket = function (io) {
  let users = []

  io.on("connection", socket => {
    socket.on("join", (user) => {
      users.push({ user, id: socket.id })

      socket.emit("user list", users)
    })

    socket.on('new message', text => {
      io.emit('new message', text)
    })

    socket.on("disconnect", () => {
      users = users.filter(user => socket.id !== user.id)

      socket.emit("user list", users)
    })
  })
}

module.exports = initSocket
