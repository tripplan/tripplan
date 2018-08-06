const DestinationCard = ({ destination }) => {
    const { tripId, id, title } = destination
    const destinationUrl = `/trips/${tripId}/${id}`
    return (
        <div>
            <Link to={destinationUrl}>{title}</Link>
        </div>
    )
}

export default DestinationCard
