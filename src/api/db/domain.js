const credentials = "include"
const headers = {
    "Content-type": "application/json; charset=UTF-8"
}
export default (url, name) => ({
    add: body => {
        return fetch(`${url}/${name}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers,
            credentials
        })
    },
    update: body => {
        return fetch(`${url}/${name}/${body.id}`, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers,
            credentials
        })
    },
    delete: id => {
        return fetch(`${url}/${name}/${id}`, {
            method: "DELETE",
            headers,
            credentials
        })
    },
    query: q => {
        return fetch(`${url}/${name}${q || ""}`, {
            headers,
            credentials
        })
    }
})
