import Fetch from "components/Fetch"
import TripDetails from "./TripDetails"
import DestinationCard from "./DestinationCard"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"
import { Button, Grid, Title } from "ui"
import AddIcon from "@material-ui/icons/Add"

export default class extends React.Component {
    createDestination = ({ people }) => {
        return api.db.destinations.add({
            people,
            tripId: parseInt(this.props.match.params.tripId)
        })
    }

    renderLayout = ({ response = [], refresh }) => (
        <Page>
            <Button component={Link} to={`/trips`} children="<- Trips" />
            <Title>TRIP PAGE</Title>
            <Placeholder delayMS={500} ready={response[0]} fallback={Spinner}>
                {trip => (
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <TripDetails trip={trip} onSave={trip => api.db.trips.update(trip).then(refresh)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={12} md={4} lg={3}>
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            this.createDestination(trip).then(destination =>
                                                this.props.history.push(`/trips/${trip.id}/${destination.id}`)
                                            )
                                        }
                                        fullWidth
                                        style={{ height: 300 }}
                                    >
                                        <AddIcon />
                                    </Button>
                                </Grid>
                                {trip.destinations.map(destination => (
                                    <Grid item xs={12} md={4} lg={3} key={destination.id}>
                                        <DestinationCard
                                            to={`/trips/${trip.id}/${destination.id}`}
                                            destination={destination}
                                            onDelete={() => api.db.destinations.delete(destination.id).then(refresh)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
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
