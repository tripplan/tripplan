import React, { Component } from "react"

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export default class extends Component {
    state = {
        loggedIn: false,
        logIn: user => {
            this.setState({ loggedIn: true, user })
        },
        logOut: () => {
            this.setState({ loggedIn: false, user: undefined })
        }
    }
    render = () => (
        <AuthContext.Provider value={this.state}>
            {this.props.children}
        </AuthContext.Provider>
    )
}

export const WithAuth = BaseComponent => {
    return props => (
        <AuthContext.Consumer>
            {auth => <BaseComponent auth={auth} {...props} />}
        </AuthContext.Consumer>
    )
}
