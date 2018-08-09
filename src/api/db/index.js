const headers = {
    "Content-type": "application/json; charset=UTF-8"
}
const helper = (url, name) => ({
    add: body => {
        return fetch(`${url}/${name}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers
        })
    },
    update: body => {
        return fetch(`${url}/${name}/${body.id}`, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers
        })
    },
    delete: id => {
        return fetch(`${url}/${name}/${id}`, {
            method: "DELETE",
            headers
        })
    },
    query: q => `${url}/${name}${q || ""}`
})

const db = url => ({
    url,
    destinations: helper(url, "destinations"),
    notes: helper(url, "notes"),
    trips: helper(url, "trips"),
    people: helper(url, "people")
})

export default db
