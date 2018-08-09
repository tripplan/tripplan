class WithJSON extends React.Component {
    state = {
        json: undefined,
        url: "",
        err: undefined,
        refresh: () => {}
    }
    _fetchData = () => {
        const { url } = this.props
        const refresh = this._fetchData
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ json, err: undefined, refresh }))
            .catch(err =>
                this.setState({
                    json: undefined,
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
                json: undefined,
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

export default WithJSON
