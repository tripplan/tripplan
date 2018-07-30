import React from "react"
import { Route, Switch } from "react-router-dom"

import DestinationPage from "containers/DestinationPage"
import TripPage from "containers/TripPage"

export default () => (
    <Switch>
        <Route
            path="/trips/:tripID/:destinationID"
            component={DestinationPage}
        />
        <Route path="/trips/:tripID" component={TripPage} />
        <Route path="/trips" component={() => "Trips"} />
    </Switch>
)
