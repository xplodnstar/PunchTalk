import React, { useState } from 'react'
import { send } from '../../actions/actions'
import { connect } from 'react-redux'

const Form = (props) => {
    // export default (props) => {
    const [text, setText] = useState()
    const username = props.username

    function sendMssg(e) {
        e.preventDefault()
        send(text)
        setText("")
    }

    return (
        <div className="formInput">
            <form onSubmit={sendMssg}>
                <input className="mssgInput" type="text" placeholder="What's up?" onChange={e => setText(e.target.value)} value={text} />
                <button className="mssgButton" type="submit">Send</button>
            </form>
        </div>
    )
}

function mapStateToProp(appState) {
    return {
        messages: appState.messages,
        username: appState.username
    }
}

export default connect(mapStateToProp)(Form) 