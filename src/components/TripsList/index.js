import React from "react"

export default ({ trips = [] }) => {
    return (
        <div>
            <h3>TRIPS</h3>
            {trips.map(trip => {
                return (
                    <div key={trip.id}>
                        <div>{trip.id}</div>
                        <div>{trip.startDate}</div>
                        <div>{trip.endDate}</div>
                        <div>
                            {trip.people.map((p, i) => (
                                <span key={i}>
                                    <b>{p} </b>
                                </span>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
