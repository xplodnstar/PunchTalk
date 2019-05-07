import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { send } from '../../actions/actions'
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'

const Form = (props) => {
    const [text, setText] = useState('')
    const { user } = useContext(AuthContext)
    // const messages = useSelector(appState => appState.messages)

    function sendMssg(e) {
        e.preventDefault()
        send({ user, text, time: new Date() })
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
    }
}

export default connect(mapStateToProp)(Form) 