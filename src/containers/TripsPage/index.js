import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import TripCard from "components/TripCard"
import api from "api"

export default WithAuth(({ auth }) => {
    const url = api.db.trips.getUrl(`?_embed=destinations&people_like=${auth.user.id}`)
    return (
        <WithJSON url={url}>
            {({ json }) => (
                <React.Fragment>
                    <Link to={`/`}>{"<- Home"}</Link>
                    <h3>TRIPS PAGE</h3>
                    <div>
                        <h1>ADD NEW TRIP</h1>
                        <button
                            onClick={() =>
                                api.db.trips.add({
                                    title: "TEST"
                                })
                            }
                        >
                            ADD
                        </button>
                    </div>
                    <Placeholder delayMS={500} ready={json} fallback={Spinner}>
                        {() => json.map(trip => <TripCard key={trip.id} trip={trip} />)}
                    </Placeholder>
                </React.Fragment>
            )}
        </WithJSON>
    )
})
