import Fetch from "components/Fetch"
import TripDetails from "./TripDetails"
import DestinationCard from "./DestinationCard"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"
import { Button, Row, Col } from "reactstrap"

export default class extends React.Component {
    renderLayout = ({ response = [], refresh }) => (
        <Page>
            <Link to={`/trips`}>{"<- Trips"}</Link>
            <Page.Title>TRIP PAGE</Page.Title>
            <Placeholder delayMS={500} ready={response[0]} fallback={Spinner}>
                {() => (
                    <>
                        <TripDetails trip={response[0]} onSave={trip => api.db.trips.update(trip).then(refresh)} />
                        <Button
                            onClick={() =>
                                api.db.destinations
                                    .add({
                                        people: response[0].people,
                                        title: "No Title",
                                        image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
                                        startDate: new Date(),
                                        tripId: parseInt(this.props.match.params.tripId)
                                    })
                                    .then(refresh, console.error)
                            }
                        >
                            ADD NEW DESTINATION
                        </Button>
                        <Row>
                            {response[0].destinations.map(destination => (
                                <Col className="mb-4" sm={12} md={4} lg={3} key={destination.id}>
                                    <DestinationCard
                                        to={`/trips/${response[0].id}/${destination.id}`}
                                        destination={destination}
                                        onDelete={() => {
                                            api.db.destinations.delete(destination.id).then(refresh)
                                        }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </Placeholder>
        </Page>
    )
    render() {
        const tripId = this.props.match.params.tripId
        const url = `?_embed=destinations&id=${tripId}`
        return <Fetch url={url} using={api.db.trips.query} render={this.renderLayout} />
    }
}
