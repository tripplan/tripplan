const options = {
    credentials: "include",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}
export default (url, name) => ({
    add: body => {
        return fetch(`${url}/${name}`, {
            ...options,
            method: "POST",
            body: JSON.stringify(body)
        }).then(r => r.json())
    },
    update: body => {
        return fetch(`${url}/${name}/${body.id}`, {
            ...options,
            method: "PATCH",
            body: JSON.stringify(body)
        }).then(r => r.json())
    },
    delete: id => {
        return fetch(`${url}/${name}/${id}`, {
            ...options,
            method: "DELETE"
        }).then(r => r.json())
    },
    query: q => {
        return fetch(`${url}/${name}${q || ""}`, {
            ...options
        }).then(r => r.json())
    }
})
