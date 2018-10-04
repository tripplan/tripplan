export const AuthContext = React.createContext()

export default class extends React.Component {
    static Consumer = AuthContext.Consumer
    state = {
        loggedIn: false,
        logIn: user => {
            this.setState({ loggedIn: true, user })
        },
        logOut: () => {
            this.setState({ loggedIn: false, user: undefined })
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/profile", {
            credentials: "include"
        }).then(r => r.json().then(this.state.logIn))
    }
    render = () => (
        <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>
    )
}

export const WithAuth = BaseComponent => {
    return props => (
        <AuthContext.Consumer>
            {auth => <BaseComponent auth={auth} {...props} />}
        </AuthContext.Consumer>
    )
}
