import React from "react"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import { Link } from "react-router-dom"

const HomePage = ({ users, auth }) => {
    return (
        <div>
            <h3>HOME PAGE</h3>
            {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
            <Placeholder delayMS={500} ready={users} fallback={Spinner}>
                {() =>
                    users.map(user => {
                        return (
                            <div key={user.id}>
                                <button onClick={() => auth.logIn(user)}>
                                    Log In As {user.name}
                                </button>
                            </div>
                        )
                    })
                }
            </Placeholder>
        </div>
    )
}

export default HomePage
