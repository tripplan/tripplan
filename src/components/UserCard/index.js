import { Button, Card, CardBody } from "reactstrap"

export default ({ user, onClick, className }) => (
    <Card className={className} key={user.id}>
        <CardBody>
            <div className="mb-2">
                <b>Log In As </b>
            </div>
            <Button onClick={onClick}>{user.name}</Button>
        </CardBody>
    </Card>
)
