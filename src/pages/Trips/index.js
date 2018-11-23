import { WithAuth } from "providers/Auth"
import Fetch from "components/Fetch"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import api from "api"
import TripCard from "./TripCard"
import AddIcon from "@material-ui/icons/Add"

import { Grid, Button, Title } from "ui"

class Component extends React.Component {
    createNewTrip = () => {
        const people = [this.props.auth.user.id]
        return api.db.trips.add({ people })
    }
    renderLayout = ({ response, refresh }) => (
        <Page>
            <Button component={Link} to="/" children="<- Home" />
            <Title>TRIPS</Title>
            <Placeholder delayMS={500} ready={response} fallback={Spinner}>
                {trips => (
                    <Grid container spacing={16}>
                        {trips.map(trip => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={trip.id}>
                                <TripCard
                                    to={`/trips/${trip.id}`}
                                    trip={trip}
                                    onDelete={() => {
                                        api.db.trips.delete(trip.id).then(refresh)
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Placeholder>
            <Button
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
                variant="fab"
                children={<AddIcon />}
                color="secondary"
                onClick={() => this.createNewTrip().then(trip => this.props.history.push(`/trips/${trip.id}`))}
            />
        </Page>
    )
    render() {
        const { auth } = this.props
        const url = `?_embed=destinations`
        return <Fetch url={url} using={api.db.trips.query} render={this.renderLayout} />
    }
}

export default WithAuth(Component)
