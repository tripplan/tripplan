import React from "react"
import _ from "lodash"
import DestinationCard from "components/DestinationCard"

const TripDetails = ({ trip }) => {
    const min = _.minBy(trip.destinations, "startDate")
    const max = _.maxBy(trip.destinations, "startDate")
    const from = new Date(min.startDate).toLocaleDateString()
    const to = new Date(max.startDate).toLocaleDateString()
    return (
        <div>
            <div>{trip.title}</div>
            <div>{`${from} to ${to}`}</div>
            {trip.people.map((p, i) => <div key={i}>{p}</div>)}
            {trip.destinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
            ))}
        </div>
    )
}

export default TripDetails
