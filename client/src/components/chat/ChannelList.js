import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const channels = [
    {
        name: ''
    },
    {
        name: ''
    }
]

const ChannelList = (props) => {
    return (
        <div className="channelList">
            <List>
                {channels.map((channel, i) => (
                    <ListItem key={"channel" + i}>
                        <ListItemText primary={channel.name}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default ChannelList