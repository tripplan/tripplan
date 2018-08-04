import React from "react"
import WithJSON from "components/WithJSON"
import DestinationDetails from "components/DestinationDetails"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import { Link } from "react-router-dom"

export default ({ match }) => {
    const destID = match.params.destID
    const tripID = match.params.tripID
    const url = `http://localhost:3000/destinations?_embed=notes&id=${destID}`
    return (
        <WithJSON url={url}>
            {({ json = [] }) => {
                const [destination] = json
                return (
                    <React.Fragment>
                        <Link to={`/trips/${tripID}`}>{"<- Trip"}</Link>
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
