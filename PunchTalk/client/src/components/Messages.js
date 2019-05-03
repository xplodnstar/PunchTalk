import React from 'react'
import { connect } from 'react-redux'

const Messages = (props) => {
    return (
        <ul>
            {props.messages.map((message, i) => (
                <li key={"mssg" + i}>{message}</li>
            ))}
        </ul>
    )
}

function mapStateToProp(appState) {
    return {
        messages: appState.messages
    }
}

export default connect(mapStateToProp)(Messages) 