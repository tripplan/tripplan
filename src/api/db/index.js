import domain from "./domain"

const db = url => ({
    destinations: domain(url, "destinations"),
    notes: domain(url, "notes"),
    trips: domain(url, "trips"),
    people: domain(url, "people")
})

export default db
