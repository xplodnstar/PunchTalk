import io from "socket.io-client"
import store from '../store'

const socket = io.connect("http://localhost:3001")

export function send(text) {
    const username = store.getState().username
    socket.emit("new message", {
        text: text,
        username: username
    })
}

socket.on('new message', message => {

    store.dispatch({
        type: 'ADD_MSSG',
        payload: message
    })
})

