import { WithAuth } from "providers/Auth"
import { Button } from "reactstrap"

const LogOutBtn = ({ auth }) => {
    return auth.loggedIn ? (
        <Button onClick={() => auth.logOut()}>Log out {auth.user.name}!</Button>
    ) : null
}

export default WithAuth(LogOutBtn)
