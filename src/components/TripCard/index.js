import _ from "lodash"

const TripCard = ({ trip }) => {
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
        <div key={trip.id}>
            <div>
                <Link to={`/trips/${trip.id}`}>{trip.title}</Link>
            </div>
            {dates}
            <ul>{trip.people.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
    )
}

export default TripCard
