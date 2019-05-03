import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Login from './Login'
import Messages from './Messages'

const ChatRoom = (props) => {
    return (
        <div>
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
