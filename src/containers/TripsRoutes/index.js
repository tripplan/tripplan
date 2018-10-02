import { Route, Switch } from "react-router-dom"

import Destination from "pages/Destination"
import Trip from "pages/Trip"
import Trips from "pages/Trips"

export default ({ match: { url } }) => (
    <Switch>
        <Route path={`${url}/:tripId/:destId`} component={Destination} />
        <Route path={`${url}/:tripId`} component={Trip} />
        <Route path={`${url}`} component={Trips} />
    </Switch>
)
