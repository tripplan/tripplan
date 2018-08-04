import React from "react"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import { Link } from "react-router-dom"

const DestinationPage = ({ destination, tripID }) => {
    return (
        <div>
            <Link to={`/trips/${tripID}`}>{"<- Trip"}</Link>
            <h3>DESTINATION PAGE</h3>
            <Placeholder delayMS={500} ready={destination} fallback={Spinner}>
                {() => (
                    <div>
                        <h3>{destination.title}</h3>
                        {destination.notes.map(note => (
                            <div key={note.id}>
                                <h4>{note.title}</h4>
                                <div>Category: {note.category}</div>
                                <div>Cost: {note.cost}</div>
                                {note.startDate && (
                                    <div>Start Date: {note.startDate}</div>
                                )}
                                <br />
                            </div>
                        ))}
                    </div>
                )}
            </Placeholder>
        </div>
    )
}

export default DestinationPage
