import React from "react"
import { Route, Switch } from "react-router-dom"

import DestinationPage from "containers/DestinationPage"
import TripPage from "containers/TripPage"
import TripsPage from "containers/TripsPage"

export default ({ match: { url } }) => (
    <Switch>
        <Route path={`${url}/:tripID/:destID`} component={DestinationPage} />
        <Route path={`${url}/:tripID`} component={TripPage} />
        <Route path={`${url}`} component={TripsPage} />
    </Switch>
)
