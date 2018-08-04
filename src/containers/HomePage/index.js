import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import HomePage from "components/HomePage"

const HomePageContainer = ({ auth }) => (
    <WithJSON url="http://localhost:3000/people">
        {({ json }) => <HomePage users={json} auth={auth} />}
    </WithJSON>
)

export default WithAuth(HomePageContainer)
