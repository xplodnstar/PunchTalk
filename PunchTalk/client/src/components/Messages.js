import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const Messages = (props) => {
    const timeStamp = moment().format('MMM-DD hh:mm')

    return (
        <ul className="mssgBoard">
            {props.messages.map((mssg, i) => (
                <li key={"mssg" + i} className="mssgLine">
                    <div className="mssgText">{mssg.username}: {mssg.text}</div><div className="mssgTime">{timeStamp}</div>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProp(appState) {
    console.log(appState)
    return {
        messages: appState.messages
    }
}

export default connect(mapStateToProp)(Messages) 