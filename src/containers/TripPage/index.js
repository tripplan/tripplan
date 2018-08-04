import React from "react"
import WithJSON from "components/WithJSON"
import TripPage from "components/TripPage"

export default ({ match }) => {
    const tripID = match.params.tripID
    const url = `http://localhost:3000/trips?_embed=destinations&id=${tripID}`
    return (
        <WithJSON url={url}>
            {({ json = [] }) => <TripPage trip={json[0]} />}
        </WithJSON>
    )
}
