import React from "react"
import WithJSON from "components/WithJSON"
import TripDetails from "components/TripDetails"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"

export default ({ match }) => {
    const tripID = match.params.tripID
    const url = `http://localhost:3000/trips?_embed=destinations&id=${tripID}`
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
