class Fetch extends React.Component {
    static defaultProps = {
        as: r => r,
        using: fetch
    }
    state = {
        response: undefined,
        url: "",
        err: undefined,
        refresh: () => {}
    }
    _fetchData = () => {
        const { url, using, as } = this.props
        const process = typeof as === "string" ? r => r[as]() : as
        const refresh = this._fetchData

        using(url)
            .then(process)
            .then(response =>
                this.setState({
                    response,
                    err: undefined,
                    refresh
                })
            )
            .catch(err =>
                this.setState({
                    response: undefined,
                    refresh,
                    err
                })
            )
    }
    componentDidMount() {
        this._fetchData()
    }
    static getDerivedStateFromProps({ url }, state) {
        if (url !== state.url) {
            return {
                response: undefined,
                err: undefined,
                refresh: () => {},
                url
            }
        }
        return null
    }
    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.state.url) {
            this._fetchData()
        }
    }
    render() {
        const { children, render } = this.props
        const rndr = children || render
        return rndr(this.state)
    }
}

export default Fetch
