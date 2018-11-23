import { WithAuth } from "providers/Auth"
import { Button } from "ui"

const LogOutBtn = ({ auth }) => {
    return auth.loggedIn ? (
        <Button color="inherit" onClick={() => auth.logOut()}>
            Log out {auth.user.displayName}
        </Button>
    ) : null
}

export default WithAuth(LogOutBtn)
