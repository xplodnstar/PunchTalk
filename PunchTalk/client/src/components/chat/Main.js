import React, { useContext } from "react"
import { AuthContext } from "../../lib/auth"

const Main = props => {
    const { signout, user } = useContext(AuthContext)

    function logout() {
        signout()
        props.history.push("/")
    }

    console.log(user)

    return (
        <div>
            <h1>Main</h1>
            <p>{user}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Main