import io from "socket.io-client"
import store from '../store'

let socket = null

export function connect(user) {
    socket = io.connect("http://localhost:3001")

    socket.emit("join", user)

    socket.on("new message", message => {
        addMssg(message)
    })

    socket.on("user list", users => {
        ListUsers(users)
    })
}


export function send(message) {
    socket.emit("new message", message)
}

export function addMssg(message) {
    store.dispatch({
        type: 'ADD_MSSG',
        payload: message
    })
}

export function ListUsers(users) {
    store.dispatch({
        type: "LIST_USERS",
        payload: users
    })
}