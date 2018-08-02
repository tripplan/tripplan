import React from "react"

const WithJSON = (name, getUrl, shouldRefetch = () => false) => BaseComponent => {
    return class extends React.Component {
        state = {
            json: undefined
        }
        fetchData = () => {
            const url = getUrl(this.props);
            fetch(url)
                .then(res => res.json())
                .then(json => this.setState({ json }))
        }
        componentDidMount() {
            this.fetchData()
        }
        componentDidUpdate(prevProps) {
            if (shouldRefetch(prevProps, this.props)) {
                this.fetchData()
            }
        }
        render() {
            const jsonProp = {
                [name]: this.state.json
            }
            return <BaseComponent {...jsonProp} {...this.props} />
        }
    }
}

export default WithJSON
