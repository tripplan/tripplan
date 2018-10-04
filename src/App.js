// @flow
import { hot } from "react-hot-loader"
import Routes from "containers/Routes"
import AuthProvider from "providers/Auth"
import Fields from "components/Form/Fields"
import Input from "components/Form/Fields/Input"

/*::
import React from "react"
type Props = {}
type State = {}
*/

Fields.register("input", Input)

class App extends React.Component /*::<Props, State> */ {
    render = () => (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default hot(module)(App)
