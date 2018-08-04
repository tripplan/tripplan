import React from "react"
import { WithAuth } from "providers/Auth"

export default WithAuth(
    ({ auth }) =>
        auth.loggedIn && <button onClick={() => auth.logOut()}>Log out {auth.user.name}!</button>
)
