export const AuthContext = React.createContext()
import api from "api"

export default class extends React.Component {
    static Consumer = AuthContext.Consumer
    state = {
        loggedIn: false,
        logIn: () => api.logIn(),
        logOut: () => api.logOut()
    }
    setUser = user => {
        user = user.id ? user : undefined
        this.setState({ loggedIn: !!user, user })
    }
    componentDidMount() {
        api.profile.fetch().then(this.setUser)
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
