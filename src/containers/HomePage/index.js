import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"

const HomePage = ({ auth }) => (
    <WithJSON url="http://localhost:3000/people">
        {({ json }) => (
            <React.Fragment>
                <h3>HOME PAGE</h3>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                <Placeholder
                    delayMS={500}
                    ready={json}
                    fallback={Spinner}
                    render={() =>
                        json.map(user => (
                            <div key={user.id}>
                                <button onClick={() => auth.logIn(user)}>
                                    Log In As {user.name}
                                </button>
                            </div>
                        ))
                    }
                />
            </React.Fragment>
        )}
    </WithJSON>
)

export default WithAuth(HomePage)
