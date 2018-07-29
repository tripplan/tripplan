import React from "react"

const withJson = (name, url) => BaseComponent => {
    return class extends React.Component {
        state = {
            json: undefined
        }
        componentDidMount() {
            fetch(url)
                .then(res => res.json())
                .then(json => this.setState({ json }))
        }
        render() {
            const jsonProp = {
                [name]: this.state.json
            }
            return <BaseComponent {...jsonProp} {...this.props} />
        }
    }
}

export default withJson
