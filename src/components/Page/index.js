import { Container, Row, Col } from "reactstrap"
import Title from "./Title"

export default class extends React.Component {
    static Title = Title
    render() {
        return (
            <Container style={{ paddingBottom: "3em" }}>
                <Row>
                    <Col>{this.props.children}</Col>
                </Row>
            </Container>
        )
    }
}
