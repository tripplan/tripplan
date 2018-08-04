import React from "react"
import { Route, Switch } from "react-router-dom"

import DestinationPage from "containers/DestinationPage"
import TripPage from "containers/TripPage"
import TripsPage from "containers/TripsPage"

export default ({ match: { url } }) => (
    <Switch>
        <Route path={`${url}/:tripId/:destId`} component={DestinationPage} />
        <Route path={`${url}/:tripId`} component={TripPage} />
        <Route path={`${url}`} component={TripsPage} />
    </Switch>
)
