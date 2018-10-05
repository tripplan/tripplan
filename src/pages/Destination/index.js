import Fetch from "components/Fetch"
import DestinationDetails from "containers/DestinationDetails"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"

export default ({ match }) => {
    const destId = match.params.destId
    const tripId = match.params.tripId
    const url = `?_embed=notes&id=${destId}`
    return (
        <Fetch url={url} using={api.db.destinations.query}>
            {({ response = [], refresh }) => (
                <Page>
                    <Link to={`/trips/${tripId}`}>{"<- Trip"}</Link>
                    <h3>DESTINATION PAGE</h3>
                    <Placeholder delayMS={500} ready={response[0]} fallback={Spinner}>
                        {() => (
                            <div>
                                <div>
                                    <h1>ADD NEW NOTE</h1>
                                    <button
                                        onClick={() =>
                                            api.db.notes
                                                .add({
                                                    people: response[0].people,
                                                    title: "TEST NOTE",
                                                    destinationId: parseInt(destId),
                                                    category: "TEST CATEGORY",
                                                    cost: `$${Math.random() * 5000}`,
                                                    startDate: new Date()
                                                })
                                                .then(refresh, console.error)
                                        }
                                    >
                                        ADD
                                    </button>
                                </div>
                                <DestinationDetails destination={response[0]} />
                            </div>
                        )}
                    </Placeholder>
                </Page>
            )}
        </Fetch>
    )
}
