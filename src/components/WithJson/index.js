import React from "react"

class WithJSON extends React.Component {
    state = {
        json: this.props.fallback,
        url: "",
        err: undefined
    }
    _fetchData = () => {
        const { url } = this.props
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ json, err: undefined }))
            .catch(err =>
                this.setState({
                    json: undefined,
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
        return this.props.children(this.state)
    }
}

export default WithJSON
