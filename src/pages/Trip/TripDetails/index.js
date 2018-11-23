import Form from "components/Form"
import { Input } from "components/Form/Fields"
import { Card, CardMedia, CardBody, Button, CardActions } from "ui"

export default ({ trip, onAdd, onDelete, onSave }) => (
    <Form initialData={trip}>
        <Card>
            <CardMedia title={trip.title} image={trip.image} height={300} />
            <CardBody>
                <Input label="Title" path="title" />
                <Input label="Post Time" path="posttime" />
                <Input label="Image" path="image" />
                <Input label="Description" path="description" />
            </CardBody>
            <CardActions>
                <Form.Consumer>
                    {({ data }) => (
                        <>
                            {onAdd && <Button color="primary" onClick={() => onAdd(data)} children="Create" />}
                            {onSave && <Button color="secondary" onClick={() => onSave(data)} children="Save" />}
                            {onDelete && <Button color="secondary" onClick={() => onDelete(data)} children="Delete" />}
                        </>
                    )}
                </Form.Consumer>
            </CardActions>
        </Card>
    </Form>
)
