import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../lib/auth"
import { connect as socketconnect } from '../../actions/actions'
import ChannelList from './ChannelList'
import Form from './Form'
import Messages from './Messages'
import { connect } from 'react-redux'
import UserList from './UserList'
// import Button from '@material-ui/core/Button'

const ChatRoom = (props) => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        socketconnect(user)
    }, [user])

    return (
        <div className="chatRoom">
            <div className="channelList"><ChannelList></ChannelList></div>
            <div className="mssgBody">
                <div className="title">
                    {/* <div className="spacer">&nbsp;</div> */}
                    <div><span>PunchTalk</span></div>
                    {/* <div><a href="/Profile" target="_blank" className="profileLink"><Button variant="outlined" color="primary" className="profileButton">Edit Profile</Button></a></div> */}
                </div>
                <div className="userName">{user}</div>
                <div>
                    <Form></Form>
                    <Messages></Messages>
                </div>
            </div>
            <div className="userList"><UserList></UserList></div>
        </div >
    )
}

function mapStateToProps(appState) {
    return {
        username: appState.username
    }
}

export default connect(mapStateToProps)(ChatRoom)
