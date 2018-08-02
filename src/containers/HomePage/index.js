import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import { Link } from "react-router-dom"

const HomePage = ({ auth, users = [] }) => (
    <div>
        <h3>HOME PAGE</h3>
        {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
        {!auth.user && (
            <Placeholder ready={users.length} fallback={<Spinner />}>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            <button onClick={() => auth.logIn(user)}>
                                Log In As {user.name}
                            </button>
                        </div>
                    )
                })}
            </Placeholder>
        )}
    </div>
)
const WithUsers = WithJSON("users", () => "http://localhost:3000/people")
const WithTrips = WithJSON("trips",
    ({ auth }) => `http://localhost:3000/trips?people_like=${_.get(auth, "user.id", "empty")}`,
    (a, b) => !_.isEqual(a.auth, b.auth)
)
export default WithAuth(WithTrips(WithUsers(HomePage)))
