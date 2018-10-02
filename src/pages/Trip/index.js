import Fetch from "components/Fetch"
import TripDetails from "containers/TripDetails"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"

export default ({ match }) => {
    const tripId = match.params.tripId
    const url = `?_embed=destinations&id=${tripId}`
    return (
        <Fetch url={url} using={api.db.trips.query}>
            {({ response = [], refresh }) => (
                <Page>
                    <Link to={`/trips`}>{"<- Trips"}</Link>
                    <h3>TRIP PAGE</h3>
                    <Placeholder delayMS={500} ready={response[0]} fallback={Spinner}>
                        {() => (
                            <div>
                                <div>
                                    <h1>ADD NEW DESTINATION</h1>
                                    <button
                                        onClick={() =>
                                            api.db.destinations
                                                .add({
                                                    title: "TEST DESTINATION",
                                                    startDate: new Date(),
                                                    tripId: parseInt(tripId)
                                                })
                                                .then(refresh, console.error)
                                        }
                                    >
                                        ADD
                                    </button>
                                </div>
                                <TripDetails trip={response[0]} />
                            </div>
                        )}
                    </Placeholder>
                </Page>
            )}
        </Fetch>
    )
}
