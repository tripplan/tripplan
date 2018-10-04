import { WithAuth } from "providers/Auth"
import { Route } from "react-router-dom"

class Fallback extends React.Component {
    render() {
        return <div>NOT LOGGED IN</div>
    }
}

const NewRoute = ({ auth, fallback = Fallback, ...props }) => {
    const component = auth.loggedIn ? props.component : fallback
    return <Route {...props} component={component} />
}

export default WithAuth(NewRoute)
