import TripForm from "containers/TripForm"
import Form from "components/Form"
import utils from "utils"
import {
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    Button,
    CardImg,
    CardText,
    CardSubtitle
} from "reactstrap"

export default ({ trip, onDelete, header, to }) => (
    <Card>
        <Link to={to}>
            <CardImg top width="100%" src={trip.image} alt="Card image cap" />
        </Link>
        <CardBody>
            <CardTitle>{header}</CardTitle>
            <CardSubtitle>
                {utils.getMinAndMaxStartDate(trip.destinations).map((date, i) => (
                    <>
                        <span className="mr-3">{date}</span>
                        {i === 0 && <small className="mr-3">to</small>}
                    </>
                ))}
            </CardSubtitle>
            <CardText>{trip.description}</CardText>
            <Link to={to}>
                <Button color="primary" className="mr-3">
                    Edit
                </Button>
            </Link>
            {onDelete && (
                <Button color="danger" onClick={() => onDelete()}>
                    Delete
                </Button>
            )}
        </CardBody>
    </Card>
)
