import React from "react"
import { WithAuth } from "providers/Auth"

export default WithAuth(
    ({ auth }) =>
        auth.loggedIn ? (
            <button onClick={() => auth.logOut()}>Log out</button>
        ) : (
            <button onClick={() => auth.logIn()}>Log In</button>
        )
)
