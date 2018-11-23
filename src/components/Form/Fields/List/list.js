import { Card, CardActions, CardHeader, CardBody, Button } from "ui"

export default class extends React.Component {
    static Head = props => <CardHeader {...props} />
    static Items = props => <CardBody {...props} />
    static Footer = props => <CardActions {...props} />
    static Item = ({ onMoveUp, onMoveDown, onRemove, ...props }) => (
        <div className="ListItem">
            <div className="ListItemMenu clearfix mb-2">
                {onMoveDown && <Button onClick={onMoveDown} children="↓" />}
                {onMoveUp && <Button onClick={onMoveUp} children="↑" />}
                <Button onClick={onRemove} children="x" />
            </div>
            <div className="ListItemChildren" {...props} />
        </div>
    )
    render = () => <Card {...this.props} />
}
