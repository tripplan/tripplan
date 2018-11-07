const options = {
    credentials: "include",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}

const profile = url => ({
    fetch: () => fetch(`${url}/profile`, options).then(r => r.json())
})

export default profile
