import React from "react"
import { Link } from "react-router-dom"

const DestinationCard = ({ destination }) => {
    const { tripID, id, title } = destination
    const destinationUrl = `/trips/${tripID}/${id}`
    return (
        <div>
            <Link to={destinationUrl}>{title}</Link>
        </div>
    )
}

export default DestinationCard
