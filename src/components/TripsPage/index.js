import React from "react"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import TripCard from "components/TripCard"

const TripsPage = ({ trips }) => {
    return (
        <React.Fragment>
            <Link to={`/`}>{"<- Home"}</Link>
            <h3>TRIPS PAGE</h3>
            <Placeholder
                delayMS={500}
                ready={trips}
                fallback={Spinner}
                render={() =>
                    trips.map(trip => <TripCard key={trip.id} trip={trip} />)
                }
            />
        </React.Fragment>
    )
}

export default TripsPage
