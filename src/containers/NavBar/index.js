import Login from "containers/Login"
import { NavTitle, IconButton } from "ui"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import HomeIcon from "@material-ui/icons/Home"

export default () => (
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" variant="fab" component={Link} to="/" children={<HomeIcon />} />
            <NavTitle children="" style={{ flexGrow: 1 }} />
            <Login />
        </Toolbar>
    </AppBar>
)
