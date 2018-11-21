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
        this.props.setValue([...this.props.value, undefined])
    }
    handleRemove = i => {
        this.props.setValue(this.props.value.filter((v, n) => n !== i))
    }
    handleSwap = (from, to) => {
        const { value, setValue } = this.props
        let cpy = [...value]
        cpy.splice(to, 0, cpy.splice(from, 1)[0])
        setValue(cpy)
    }
    toggleShow = show => this.setState({ show })
    render() {
        const { path, label, value, children } = this.props
        const { show } = this.state
        const fields = value.map((s, i) =>
            React.Children.map(children, child => {
                const p = [path, i.toString(), child.path].filter(Boolean).join(".")
                return React.cloneElement(child, { path: p })
            })
        )
        const hasFields = !!fields.length

        return (
            <List>
                <List.Head>
                    <span>{label}</span>
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
                        <Button color="info" className="ml-2" size="sm" onClick={() => this.toggleShow(!show)}>
                            {show ? "close" : "open"} {!show && <Badge color="light">{fields.length}</Badge>}
                        </Button>
                    )}
                </List.Head>
                {!!hasFields && show && (
                    <>
                        <List.Items>
                            {fields.map((field, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <hr />}
                                    <List.Item
                                        onRemove={() => this.handleRemove(i)}
                                        onMoveUp={i > 0 && fields.length > 1 && (() => this.handleSwap(i, i - 1))}
                                        onMoveDown={i < fields.length - 1 && fields.length > 1 && (() => this.handleSwap(i, i + 1))}
                                    >
                                        {field}
                                    </List.Item>
                                </React.Fragment>
                            ))}
                        </List.Items>
                        <List.Footer>
                            <Button className="ml-2" children="new +" size="sm" onClick={this.handleAdd} />
                        </List.Footer>
                    </>
                )}
            </List>
        )
    }
}
