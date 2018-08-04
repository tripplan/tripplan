import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import TripCard from "components/TripCard"

export default WithAuth(({ auth }) => {
    const url = "http://localhost:3000/trips?_embed=destinations&people_like="
    return (
        <WithJSON url={`${url}${auth.user.id}`}>
            {({ json }) => (
                <React.Fragment>
                    <Link to={`/`}>{"<- Home"}</Link>
                    <h3>TRIPS PAGE</h3>
                    <Placeholder delayMS={500} ready={json} fallback={Spinner}>
                        {() => json.map(trip => <TripCard key={trip.id} trip={trip} />)}
                    </Placeholder>
                </React.Fragment>
            )}
        </WithJSON>
    )
})
