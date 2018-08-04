// @flow
import React from "react"
import { hot } from "react-hot-loader"
import Routes from "components/Routes"
import AuthProvider from "providers/Auth"

/*::
type Props = {}
type State = {}
*/

class App extends React.Component /*::<Props, State> */ {
    render() {
        return (
            <AuthProvider>
                <Routes />
            </AuthProvider>
        )
    }
}

export default hot(module)(App)
