import _ from "lodash"

const Context = React.createContext({})

export default class extends React.Component {
    static Consumer = Context.Consumer
    static getDerivedStateFromProps(props, state) {
        const { initialData } = props
        if (initialData !== state.initialData) {
            return {
                data: initialData,
                initialData
            }
        }
        return null
    }
    state = {
        data: this.props.initialData || {},
        set: (path, value) => {
            let data = JSON.parse(JSON.stringify(this.state.data))
            this.setState(_.set({ data }, `data.${path}`, value))
        },
        get: path => _.get(this.state, `data.${path}`),
        reset: () => {
            this.setState({
                data: this.props.initialData || {}
            })
        }
    }

    render() {
        const { children } = this.props
        return (
            <Context.Provider value={this.state}>
                {typeof children === "function" ? <Context.Consumer>{children}</Context.Consumer> : children}
            </Context.Provider>
        )
    }
}
