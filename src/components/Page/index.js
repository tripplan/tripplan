import { Container, Row, Col } from "reactstrap"

export default ({ children }) => (
    <Container>
        <Row>
            <Col>{children}</Col>
        </Row>
    </Container>
)
