import {
    ListGroup,
    ListGroupItem,
    Card,
    CardFooter,
    CardHeader,
    CardBody,
    Button,
    ButtonGroup
} from "reactstrap"

export default class extends React.Component {
    static Head = props => <CardHeader {...props} />
    static Items = props => <CardBody {...props} />
    static Footer = props => <CardFooter {...props} />
    static Item = ({ onMoveUp, onMoveDown, onRemove, ...props }) => (
        <div className="ListItem">
            <div className="ListItemMenu clearfix mb-2">
                <ButtonGroup>
                    {onMoveDown && (
                        <Button size="sm" color="primary" onClick={onMoveDown}>
                            ↓
                        </Button>
                    )}
                    {onMoveUp && (
                        <Button size="sm" color="primary" onClick={onMoveUp}>
                            ↑
                        </Button>
                    )}
                </ButtonGroup>
                <Button className="float-right" size="sm" color="danger" onClick={onRemove}>
                    x
                </Button>
            </div>
            <div className="ListItemChildren" {...props} />
        </div>
    )
    render = () => <Card {...this.props} />
}
