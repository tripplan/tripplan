import React from "react"
import { WithTrips } from "providers/Trips"
import { Link } from "react-router-dom"

export default WithTrips(({ match, trips = [] }) => {
    const trip = trips.find(t => t.id === match.params.tripID)
    if (!trip) return "TRIP NOT FOUND"
    const destination = trip.destinations.find(
        d => d.id === match.params.destID
    )
    return (
        <div>
            <Link to={`/trips/${trip.id}`}>{"<- Trip"}</Link>
            <h3>DESTINATION PAGE</h3>
            <h3>{destination.title}</h3>
            {destination.notes.map(note => {
                return (
                    <div key={note.id}>
                        <h4>{note.title}</h4>
                        <div>Category: {note.category}</div>
                        <div>Cost: {note.cost}</div>
                        {note.startDate && (
                            <div>Start Date: {note.startDate}</div>
                        )}
                        <br />
                    </div>
                )
            })}
        </div>
    )
})
