import { hot } from "react-hot-loader"
import Routes from "containers/Routes"
import AuthProvider from "providers/Auth"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import pink from "@material-ui/core/colors/pink"

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink
    },
    typography: {
        useNextVariants: true
    }
})

class App extends React.Component {
    render = () => (
        <MuiThemeProvider theme={theme}>
            <AuthProvider>
                <CssBaseline />
                <Routes />
            </AuthProvider>
        </MuiThemeProvider>
    )
}

export default hot(module)(App)
