import utils from "utils"
import { Card, CardTitle, CardBody, Button, CardMedia, CardText, CardSubtitle, CardActions } from "ui"

export default ({ trip, onDelete, to }) => (
    <Card>
        <CardMedia component={Link} to={to} image={trip.image} height={200} />
        <CardBody>
            <CardTitle>{trip.title}</CardTitle>
            <CardSubtitle>
                {utils.getMinAndMaxStartDate(trip.destinations).map((date, i) => (
                    <span key={i}>
                        {date} {i === 0 && " to "}
                    </span>
                ))}
            </CardSubtitle>
            <CardText>{trip.description}</CardText>
        </CardBody>
        <CardActions>
            <Button component={Link} to={to} children="Edit" />
            {onDelete && <Button onClick={() => onDelete()} children="Delete" />}
        </CardActions>
    </Card>
)
