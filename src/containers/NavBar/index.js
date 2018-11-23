import Login from "containers/Login"
import { Button } from "ui"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

export default () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <Button component={Link} to="/" children="Home" style={{ flexGrow: 1 }} />
            <Login />
        </Toolbar>
    </AppBar>
)
