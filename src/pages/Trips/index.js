import { WithAuth } from "providers/Auth"
import Fetch from "components/Fetch"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"
import TripCard from "./TripCard"

import { Row, Col, Button } from "reactstrap"

class Component extends React.Component {
    renderLayout = ({ response, refresh }) => (
        <Page>
            <Link to={`/`}>{"<- Home"}</Link>
            <Page.Title>TRIPS PAGE</Page.Title>
            <div className="mb-4">
                <Button
                    onClick={() => {
                        const people = [this.props.auth.user.id]
                        const image =
                            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        const title = "No Title"
                        api.db.trips.add({ title, image, people }).then(refresh)
                    }}
                >
                    Create New Trip
                </Button>
            </div>
            <Placeholder delayMS={500} ready={response} fallback={Spinner}>
                {() => (
                    <Row>
                        {response.map(trip => (
                            <Col sm={12} md={4} lg={3} className="mb-4" key={trip.id}>
                                <TripCard
                                    to={`/trips/${response[0].id}`}
                                    trip={trip}
                                    header={trip.title || "No Title"}
                                    onDelete={() => {
                                        api.db.trips.delete(trip.id).then(refresh)
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Placeholder>
        </Page>
    )
    render() {
        const { auth } = this.props
        const url = `?_embed=destinations&people_like=${auth.user.id}`
        return <Fetch url={url} using={api.db.trips.query} render={this.renderLayout} />
    }
}

export default WithAuth(Component)
