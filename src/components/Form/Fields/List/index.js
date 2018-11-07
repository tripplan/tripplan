import List from "./list"
import { Button, Badge } from "reactstrap"

export default class extends React.Component {
    state = {
        show: false
    }
    static defaultProps = {
        value: []
    }
    handleAdd = () => {
        this.props.onChange([...this.props.value, undefined])
    }
    handleRemove = i => {
        this.props.onChange(this.props.value.filter((v, n) => n !== i))
    }
    handleSwap = (from, to) => {
        const { value, onChange } = this.props
        let cpy = [...value]
        cpy.splice(to, 0, cpy.splice(from, 1)[0])
        onChange(cpy)
    }
    toggleShow = show => this.setState({ show })
    render() {
        const { config, value, renderFields } = this.props
        const { show } = this.state
        const fields = value.map((s, i) => ({
            ...config.model,
            path: `${config.path}.${i}`
        }))
        const hasFields = !!fields.length

        return (
            <List>
                <List.Head>
                    <span>{config.label}</span>
                    {!hasFields && (
                        <Button
                            className="ml-2"
                            size="sm"
                            onClick={() => {
                                this.handleAdd()
                                this.toggleShow(true)
                            }}
                        >
                            <span>new +</span>
                        </Button>
                    )}
                    {!!hasFields && (
                        <Button
                            color="info"
                            className="ml-2"
                            size="sm"
                            onClick={() => this.toggleShow(!show)}
                        >
                            {show ? "close" : "open"}{" "}
                            {!show && <Badge color="light">{fields.length}</Badge>}
                        </Button>
                    )}
                </List.Head>
                {!!hasFields &&
                    show && (
                        <>
                            <List.Items>
                                {fields.map((f, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <hr />}
                                        <List.Item
                                            onRemove={() => this.handleRemove(i)}
                                            onMoveUp={
                                                i > 0 &&
                                                fields.length > 1 &&
                                                (() => this.handleSwap(i, i - 1))
                                            }
                                            onMoveDown={
                                                i < fields.length - 1 &&
                                                fields.length > 1 &&
                                                (() => this.handleSwap(i, i + 1))
                                            }
                                        >
                                            {renderFields([f])}
                                        </List.Item>
                                    </React.Fragment>
                                ))}
                            </List.Items>
                            <List.Footer>
                                <Button
                                    className="ml-2"
                                    children="new +"
                                    size="sm"
                                    onClick={this.handleAdd}
                                />
                            </List.Footer>
                        </>
                    )}
            </List>
        )
    }
}
