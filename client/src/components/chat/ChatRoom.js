import React, { useContext } from "react"
import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'
import ChannelList from './ChannelList'
import Form from './Form'
import Messages from './Messages'

const ChatRoom = (props) => {
    const { signout, user } = useContext(AuthContext)

    function logout() {
        signout()
        props.history.push("/")
    }
    return (
        <div className="chatRoom">
            <div className="channelList"><ChannelList></ChannelList></div>
            <div className="mssgBody">
                <div className="title">PunchTalk</div>
                <div className="userName">{user}</div>
                <div>
                    <Form></Form>
                    <Messages></Messages>
                </div>
                <button onClick={logout}>Logout</button>
            </div>
            <div className="userList"></div>
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        username: appState.username
    }
}

export default connect(mapStateToProps)(ChatRoom)
