import React from "react"
import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import TripsPage from "components/TripsPage"

export default WithAuth(({ auth }) => {
    const url = "http://localhost:3000/trips?_embed=destinations&people_like="
    return (
        <WithJSON url={`${url}${auth.user.id}`}>
            {({ json }) => <TripsPage trips={json} />}
        </WithJSON>
    )
})
