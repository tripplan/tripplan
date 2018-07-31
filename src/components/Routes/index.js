//@flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "components/NavBar"
import PrivateRoute from "containers/PrivateRoute"
import TripsPage from "containers/TripsPage"
import HomePage from "containers/HomePage"

export default () => (
    <Router>
        <React.Fragment>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/trips" component={TripsPage} />
        </React.Fragment>
    </Router>
)
