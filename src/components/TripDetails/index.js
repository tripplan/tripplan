import _ from "lodash"
import DestinationCard from "components/DestinationCard"

const TripDetails = ({ trip }) => {
    let dates = null
    if (trip.destinations.length) {
        const min = _.minBy(trip.destinations, "startDate")
        const max = _.maxBy(trip.destinations, "startDate")
        const from = new Date(min.startDate).toLocaleDateString()
        const to = new Date(max.startDate).toLocaleDateString()
        dates = (
            <div>
                {from} to {to}
            </div>
        )
    }
    return (
        <div>
            <div>{trip.title}</div>
            {dates}
            {trip.people.map((p, i) => <div key={i}>{p}</div>)}
            {trip.destinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
            ))}
        </div>
    )
}

export default TripDetails
