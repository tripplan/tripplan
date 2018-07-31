import React from "react"
import { WithTrips } from "providers/Trips"
import { Link } from "react-router-dom"
import _ from "lodash"

export default WithTrips(({ match, trips = [] }) => {
    return (
        <div>
            <Link to={`/`}>{"<- Home"}</Link>
            <h3>TRIPS PAGE</h3>
            {trips.map(trip => {
                const min = _.minBy(trip.destinations, "startDate")
                const max = _.maxBy(trip.destinations, "startDate")

                const from = new Date(min.startDate).toLocaleDateString()
                const to = new Date(max.startDate).toLocaleDateString()
                return (
                    <div key={trip.id}>
                        <div>
                            <Link to={`${match.url}/${trip.id}`}>
                                {trip.title}
                            </Link>
                        </div>
                        <div>
                            {from} to {to}
                        </div>
                        <ul>
                            {trip.people.map((p, i) => (
                                <li key={i}>
                                    <b>{p} </b>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
})
