import React, { useState } from 'react'
import { send } from "../actions/actions"
import '../styles/styles.css'

export default (props) => {
    const [text, setText] = useState('')

    function sendMssg(e) {
        e.preventDefault()
        send(text)
        // need to reset the input
        setText(" ")
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

