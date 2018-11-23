import { hot } from "react-hot-loader"
import Routes from "containers/Routes"
import AuthProvider from "providers/Auth"
import CssBaseline from "@material-ui/core/CssBaseline"

class App extends React.Component {
    render = () => (
        <AuthProvider>
            <CssBaseline />
            <Routes />
        </AuthProvider>
    )
}

export default hot(module)(App)
