import React from "react"
import _ from "lodash"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"

const TripPage = ({ trip }) => {
    return (
        <div>
            <Link to={`/trips`}>{"<- Trips"}</Link>
            <h3>TRIP PAGE</h3>
            <Placeholder delayMS={500} ready={trip} fallback={Spinner}>
                {() => {
                    const min = _.minBy(trip.destinations, "startDate")
                    const max = _.maxBy(trip.destinations, "startDate")
                    const from = new Date(min.startDate).toLocaleDateString()
                    const to = new Date(max.startDate).toLocaleDateString()
                    return (
                        <div key={trip.id}>
                            <div>{trip.title}</div>
                            <div>
                                {from} to {to}
                            </div>
                            <ul>
                                {trip.people.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                            {trip.destinations.map(destination => {
                                return (
                                    <div key={destination.id}>
                                        <div>
                                            <Link
                                                to={`/trips/${trip.id}/${
                                                    destination.id
                                                }`}
                                            >
                                                {destination.title}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </Placeholder>
        </div>
    )
}

export default TripPage
