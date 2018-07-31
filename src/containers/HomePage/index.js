import React from "react"
import { WithAuth } from "providers/Auth"
import WithJson from "components/WithJson"
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
const WithUsers = WithJson("users", "http://localhost:3000/people")
export default WithUsers(WithAuth(HomePage))
