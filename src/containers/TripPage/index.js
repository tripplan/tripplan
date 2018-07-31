import React from "react"
import { WithTrips } from "providers/Trips"
import { Link } from "react-router-dom"

export default WithTrips(({ match, trips = [] }) => {
    const trip = trips.find(t => t.id === match.params.tripID)
    if (!trip) return "TRIP NOT FOUND"

    const min = _.minBy(trip.destinations, "startDate")
    const max = _.maxBy(trip.destinations, "startDate")

    const from = new Date(min.startDate).toLocaleDateString()
    const to = new Date(max.startDate).toLocaleDateString()
    return (
        <div>
            <Link to={`/trips`}>{"<- Trips"}</Link>
            <h3>TRIP PAGE</h3>
            <div key={trip.id}>
                <div>{trip.title}</div>
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
                {trip.destinations.map(destination => {
                    return (
                        <div key={destination.id}>
                            <div>
                                <Link to={`${match.url}/${destination.id}`}>
                                    {destination.title}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
})
