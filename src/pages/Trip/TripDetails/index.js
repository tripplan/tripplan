import TripForm from "containers/TripForm"
import Form from "components/Form"
import { Card, CardHeader, CardBody, Button } from "reactstrap"

export default ({ trip, onAdd, onDelete, header, className, onSave }) => (
    <TripForm className={className} initialData={trip}>
        <Card>
            <CardHeader>{header}</CardHeader>
            <CardBody>
                <Form.Fields />
                <Form.Consumer>
                    {({ data }) => (
                        <>
                            {onAdd && (
                                <Button
                                    color="primary"
                                    className="mr-3"
                                    onClick={() => onAdd(data)}
                                >
                                    Create
                                </Button>
                            )}
                            {onSave && (
                                <Button
                                    color="primary"
                                    className="mr-3"
                                    onClick={() => onSave(data)}
                                >
                                    Save
                                </Button>
                            )}
                            {onDelete && (
                                <Button
                                    color="danger"
                                    className="mr-3"
                                    onClick={() => onDelete(data)}
                                >
                                    Delete
                                </Button>
                            )}
                        </>
                    )}
                </Form.Consumer>
            </CardBody>
        </Card>
    </TripForm>
)
