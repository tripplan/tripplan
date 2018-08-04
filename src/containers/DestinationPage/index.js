import React from "react"
import WithJSON from "components/WithJSON"
import DestinationPage from "components/DestinationPage"

export default ({ match }) => {
    const destID = match.params.destID
    const tripID = match.params.tripID
    const url = `http://localhost:3000/destinations?_embed=notes&id=${destID}`
    return (
        <WithJSON url={url}>
            {({ json = [] }) => (
                <DestinationPage destination={json[0]} tripID={tripID} />
            )}
        </WithJSON>
    )
}
