import React from "react"

const DestinationDetails = ({ destination }) => (
    <div>
        <h3>{destination.title}</h3>
        {destination.notes.map(note => (
            <div key={note.id}>
                <h4>{note.title}</h4>
                <div>Category: {note.category}</div>
                <div>Cost: {note.cost}</div>
                {note.startDate && <div>Start Date: {note.startDate}</div>}
                <br />
            </div>
        ))}
    </div>
)

export default DestinationDetails
