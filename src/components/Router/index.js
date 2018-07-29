//@flow
import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/trips">Trips</Link>
                </li>
                <li>
                    <Link to="/trips/1234">Trip 1234</Link>
                </li>
                <li>
                    <Link to="/trips/1234/abc">Trip 1234 -> abc</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" render={() => "Home"} />
            <Route exact path="/trips" render={() => "Trips"} />
            <Route
                exact
                path="/trips/:tripID"
                render={({ match }) => `Trip ${match.params.tripID}`}
            />
            <Route
                exact
                path="/trips/:tripID/:destinationID"
                render={({ match }) =>
                    `Trip ${match.params.tripID} ->
                    Destination ${match.params.destinationID}`
                }
            />
        </div>
    </Router>
)
