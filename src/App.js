// @flow
import React from "react"
import { hot } from "react-hot-loader"
import Router from "./components/Router"

/*::
type Props = {}
type State = {}
*/

class App extends React.Component /*::<Props, State> */ {
    render() {
        return <Router />
    }
}

export default hot(module)(App)
