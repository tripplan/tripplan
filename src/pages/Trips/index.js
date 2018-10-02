import { WithAuth } from "providers/Auth"
import Fetch from "components/Fetch"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import TripCard from "containers/TripCard"
import Page from "components/Page"
import api from "api"

export default WithAuth(({ auth }) => {
    const url = `?_embed=destinations&people_like=${auth.user.id}`
    return (
        <Fetch url={url} using={api.db.trips.query}>
            {({ response, refresh }) => (
                <Page>
                    <Link to={`/`}>{"<- Home"}</Link>
                    <h3>TRIPS PAGE</h3>
                    <div>
                        <h1>ADD NEW TRIP</h1>
                        <button
                            onClick={() =>
                                api.db.trips
                                    .add({
                                        title: "TEST",
                                        people: [auth.user.id]
                                    })
                                    .then(refresh, console.error)
                            }
                        >
                            ADD
                        </button>
                    </div>
                    <Placeholder delayMS={500} ready={response} fallback={Spinner}>
                        {() => response.map(trip => <TripCard key={trip.id} trip={trip} />)}
                    </Placeholder>
                </Page>
            )}
        </Fetch>
    )
})
