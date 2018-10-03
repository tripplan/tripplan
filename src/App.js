// @flow
import { hot } from "react-hot-loader"
import Routes from "containers/Routes"
import AuthProvider from "providers/Auth"

/*::
import React from "react"
type Props = {}
type State = {}
*/

//         test
const asdasda = 123
class App extends React.Component /*::<Props, State> */ {
    render = () => (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default hot(module)(App)
