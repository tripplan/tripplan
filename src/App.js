// @flow
import React from "react"
import { hot } from "react-hot-loader"
import Routes from "components/Routes"
import AuthProvider, { WithAuth } from "providers/Auth"
import TripsProvider from "providers/Trips"

/*::
type Props = {}
type State = {}
*/

const TripsProviderWithAuth = WithAuth(TripsProvider)

class App extends React.Component /*::<Props, State> */ {
    render() {
        return (
            <AuthProvider>
                {/* <TripsProviderWithAuth> */}
                <Routes />
                {/* </TripsProviderWithAuth> */}
            </AuthProvider>
        )
    }
}

export default hot(module)(App)
