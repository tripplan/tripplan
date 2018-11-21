const Context = React.createContext({})

export default class extends React.Component {
    static Consumer = Context.Consumer
    static defaultProps = {
        pageSize: 4
    }
    state = {
        page: 0,
        goTo: pn => {
            const { pageSize, total } = this.props
            const { page } = this.state
            pn = Math.max(0, pn)
            pn = Math.min(pn, Math.floor((total - 1) / pageSize))
            if (page !== pn) this.setState({ page: pn })
        },
        slice: arr => {
            const { pageSize } = this.props
            const { page } = this.state
            const offset = page * pageSize
            return arr.slice(offset, offset + pageSize)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.total !== this.props.total || prevProps.pageSize !== this.props.pageSize) {
            this.state.goTo(this.state.page)
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
