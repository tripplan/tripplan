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
        </ul>
        <Login />
        <hr />
    </div>
)
