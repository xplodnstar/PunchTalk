import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Login from './Login'
import Messages from './Messages'
import '../styles/styles.css'

const ChatRoom = (props) => {
    return (
        <div className="mssgBody">
            <div className="title">PunchTalk</div>
            {props.username ? (
                <div>
                    <Form></Form>
                    <Messages></Messages>
                </div>
            ) : (
                    <Login></Login>
                )}
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        username: appState.username
    }
}

export default connect(mapStateToProps)(ChatRoom)
