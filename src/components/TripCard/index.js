import React from "react"
import _ from "lodash"
import { Link } from "react-router-dom"

const TripCard = ({ trip }) => {
    const min = _.minBy(trip.destinations, "startDate")
    const max = _.maxBy(trip.destinations, "startDate")

    const from = new Date(min.startDate).toLocaleDateString()
    const to = new Date(max.startDate).toLocaleDateString()
    return (
        <div key={trip.id}>
            <div>
                <Link to={`/trips/${trip.id}`}>{trip.title}</Link>
            </div>
            <div>
                {from} to {to}
            </div>
            <ul>{trip.people.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
    )
}

export default TripCard
