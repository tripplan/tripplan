import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import api from "api"

import { Container, Row, Col, Button, Card, CardBody } from "reactstrap"

const HomePage = ({ auth }) => (
    <WithJSON url={api.db.people.getUrl()}>
        {({ json }) => (
            <Container>
                <Row>
                    <Col xs={{ size: 8, offset: 2 }}>
                        <h3>HOME PAGE</h3>
                        {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                        <Placeholder
                            delayMS={500}
                            ready={json}
                            fallback={Spinner}
                            render={() =>
                                json.map(user => (
                                    <Card className="mb-4" key={user.id}>
                                        <CardBody>
                                            <div className="mb-2">
                                                <b>Log In As </b>
                                            </div>
                                            <Button onClick={() => auth.logIn(user)}>
                                                {user.name}
                                            </Button>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        />
                    </Col>
                </Row>
            </Container>
        )}
    </WithJSON>
)

export default WithAuth(HomePage)
