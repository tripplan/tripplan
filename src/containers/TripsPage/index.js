import React from "react"
import { Route, Switch } from "react-router-dom"

import DestinationPage from "containers/DestinationPage"
import TripPage from "containers/TripPage"
import TripsList from "components/TripsList"
import TripsProvider, { WithTrips } from "providers/Trips"
import { WithAuth } from "../../providers/Auth"

const TripsProviderWithAuth = WithAuth(TripsProvider)

export default () => (
    <TripsProviderWithAuth>
        <Switch>
            <Route
                path="/trips/:tripID/:destinationID"
                component={DestinationPage}
            />
            <Route path="/trips/:tripID" component={TripPage} />
            <Route path="/trips" component={WithTrips(TripsList)} />
        </Switch>
    </TripsProviderWithAuth>
)
