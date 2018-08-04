import React from "react"
import WithJSON from "components/WithJSON"
import DestinationDetails from "components/DestinationDetails"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import { Link } from "react-router-dom"
import api from "api"

export default ({ match }) => {
    const destId = match.params.destId
    const tripId = match.params.tripId
    const url = api.db.destinations.getUrl(`?_embed=notes&${destId}`)
    return (
        <WithJSON url={url}>
            {({ json = [] }) => {
                const [destination] = json
                return (
                    <React.Fragment>
                        <Link to={`/trips/${tripId}`}>{"<- Trip"}</Link>
                        <h3>DESTINATION PAGE</h3>
                        <Placeholder delayMS={500} ready={destination} fallback={Spinner}>
                            {() => <DestinationDetails destination={destination} />}
                        </Placeholder>
                    </React.Fragment>
                )
            }}
        </WithJSON>
    )
}
