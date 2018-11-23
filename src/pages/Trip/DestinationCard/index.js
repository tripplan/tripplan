import { Card, CardTitle, CardBody, Button, CardMedia, CardText, CardActions } from "ui"

export default props => {
    const { destination, onDelete, header, to } = props
    return (
        <Card>
            <CardMedia component={Link} to={to} image={destination.image} height={200} />
            <CardBody>
                <CardTitle>{header}</CardTitle>
                <CardText>{destination.description}</CardText>
            </CardBody>
            <CardActions>
                <Button color="secondary" onClick={onDelete} children="Delete" />
            </CardActions>
        </Card>
    )
}
