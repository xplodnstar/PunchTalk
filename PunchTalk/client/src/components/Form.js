import React, { useState } from 'react'
import { send } from "../actions/actions"

export default (props) => {
    const [text, setText] = useState('')

    function sendMssg(e) {
        e.preventDefault()
        send(text)
        // setText('')
    }

    return (
        <div>
            <form onSubmit={sendMssg}>
                <input type="text" placeholder="What's up?" onChange={e => setText(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

