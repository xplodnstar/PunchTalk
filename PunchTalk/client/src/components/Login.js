import React, { useState } from 'react'
import { createUsername } from '../actions/actions'


export default props => {
    const [username, setUsername] = useState('')

    function sendUsername(e) {
        e.preventDefault()
        createUsername(username)
    }

    return (
        < form onSubmit={sendUsername} >
            <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form >
    )
}