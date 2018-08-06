const helper = (url, name) => ({
    add: body => {
        const method = body.id ? "PUT" : "POST"
        const sufix = body.id ? `/${body.id}` : ""

        return fetch(`${url}/${name}${sufix}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    },
    delete: id => {
        return fetch(`${url}/${name}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
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
