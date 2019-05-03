import React, { useState } from 'react'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

export default (props) => {
    const [username, setUsername] = useState('')

    function login(e) {
        e.preventDefault()

    }

    return {
        < form onSubmit = { login() } >
        <input type="text" value="username" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} 
        </ form>
            }
}