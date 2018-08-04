import React from "react"
import WithJSON from "components/WithJSON"
import TripDetails from "components/TripDetails"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import api from "api"

export default ({ match }) => {
    const tripId = match.params.tripId
    const url = api.db.trips.getUrl(`?_embed=destinations&id=${tripId}`)
    return (
        <WithJSON url={url}>
            {({ json = [] }) => (
                <React.Fragment>
                    <Link to={`/trips`}>{"<- Trips"}</Link>
                    <h3>TRIP PAGE</h3>
                    <Placeholder delayMS={500} ready={json[0]} fallback={Spinner}>
                        {() => <TripDetails trip={json[0]} />}
                    </Placeholder>
                </React.Fragment>
            )}
        </WithJSON>
    )
}
