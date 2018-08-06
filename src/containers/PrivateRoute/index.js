import { WithAuth } from "providers/Auth"
import { Route } from "react-router-dom"

const NewRoute = ({ auth, fallback = () => "NOT LOGGED IN", ...props }) => {
    const component = auth.loggedIn ? props.component : fallback
    return <Route {...props} component={component} />
}

export default WithAuth(NewRoute)
