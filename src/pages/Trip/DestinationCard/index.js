import DestinationForm from "containers/DestinationForm"
import Form from "components/Form"
import { Card, CardTitle, CardHeader, CardBody, Button, CardImg, CardText } from "reactstrap"

export default ({ destination, onDelete, header, to }) => (
    <Card>
        <Link to={to}>
            <CardImg top width="100%" src={destination.image} alt="Card image cap" />
        </Link>
        <CardBody>
            <CardTitle>{header}</CardTitle>
            <CardText>{destination.description}</CardText>
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
