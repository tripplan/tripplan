import _ from "lodash"
import Fields from "./Fields"

const Context = React.createContext({})

export default class extends React.Component {
    static registerField = (k, v) => Fields.registerField(k, v)
    static Fields = props => (
        <Context.Consumer>{state => <Fields {...state} {...props} />}</Context.Consumer>
    )
    static Consumer = Context.Consumer
    static getDerivedStateFromProps(props, state) {
        if (props.initialData !== state.initialData) {
            return {
                data: props.initialData
            }
        }
        return null
    }
    state = {
        data: this.props.initialData || {},
        fields: this.props.fields,
        set: (path, value) => {
            this.setState(state => {
                return _.set(state, `data.${path}`, value)
            })
        },
        get: path => _.get(this.state, `data.${path}`)
    }

    render() {
        const { children } = this.props
        return (
            <Context.Provider value={this.state}>
                {typeof children === "function" ? (
                    <Context.Consumer>{children}</Context.Consumer>
                ) : (
                    children
                )}
            </Context.Provider>
        )
    }
}
