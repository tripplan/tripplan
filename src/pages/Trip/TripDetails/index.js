import Form from "components/Form"
import { Input } from "components/Form/Fields"
import { Card, CardHeader, CardBody, Button } from "reactstrap"

export default ({ trip, onAdd, onDelete, header, onSave }) => (
    <Form initialData={trip}>
        <Card>
            <CardHeader>{header}</CardHeader>
            <CardBody>
                <Input label="Title" path="title" />
                <Input label="Post Time" path="posttime" />
                <Input label="Image" path="image" />
                <Input label="Description" path="description" />
                <Form.Consumer>
                    {({ data }) => (
                        <>
                            {onAdd && <Button color="primary" className="mr-3" onClick={() => onAdd(data)} children="Create" />}
                            {onSave && <Button color="primary" className="mr-3" onClick={() => onSave(data)} children="Save" />}
                            {onDelete && <Button color="danger" className="mr-3" onClick={() => onDelete(data)} children="Delete" />}
                        </>
                    )}
                </Form.Consumer>
            </CardBody>
        </Card>
    </Form>
)
