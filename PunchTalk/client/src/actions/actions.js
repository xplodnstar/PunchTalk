import io from "socket.io-client"
import store from '../store'

const socket = io.connect("http://localhost:3001")
console.log(socket)

export function send(text) {
    socket.emit("new message", text)
}

socket.on('new message', text => {
    store.dispatch({
        type: 'ADD_MSSG',
        payload: text
    })
})

