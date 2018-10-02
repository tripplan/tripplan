import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "containers/NavBar"
import PrivateRoute from "containers/PrivateRoute"
import TripsRoutes from "containers/TripsRoutes"
import Home from "pages/Home"

export default () => (
    <Router>
        <React.Fragment>
            <NavBar />
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/trips" component={TripsRoutes} />
        </React.Fragment>
    </Router>
)
