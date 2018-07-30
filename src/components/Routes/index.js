//@flow
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "components/NavBar"
import PrivateRoute from "containers/PrivateRoute"
import TripsPage from "containers/TripsPage"

export default () => (
    <Router>
        <React.Fragment>
            <NavBar />
            <Route exact path="/" component={() => "Home"} />
            <PrivateRoute path="/trips" component={TripsPage} />
        </React.Fragment>
    </Router>
)
