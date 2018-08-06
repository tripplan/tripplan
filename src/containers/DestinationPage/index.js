import WithJSON from "components/WithJSON"
import DestinationDetails from "components/DestinationDetails"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"

export default ({ match }) => {
    const destId = match.params.destId
    const tripId = match.params.tripId
    const url = api.db.destinations.query(`?_embed=notes&id=${destId}`)
    return (
        <WithJSON url={url}>
            {({ json = [] }) => (
                <Page>
                    <Link to={`/trips/${tripId}`}>{"<- Trip"}</Link>
                    <h3>DESTINATION PAGE</h3>
                    <Placeholder delayMS={500} ready={json[0]} fallback={Spinner}>
                        {() => <DestinationDetails destination={json[0]} />}
                    </Placeholder>
                </Page>
            )}
        </WithJSON>
    )
}
