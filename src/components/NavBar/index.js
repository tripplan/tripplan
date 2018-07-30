import React from "react"
import { Link } from "react-router-dom"
import Login from "containers/Login"

export default () => (
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
        <Login />
        <hr />
    </div>
)
