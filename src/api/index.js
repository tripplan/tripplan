import db from "./db"
import profile from "./profile"

export default {
    db: db(SERVER_URL),
    profile: profile(SERVER_URL),
    logIn: () => (window.location.href = `${SERVER_URL}/login`),
    logOut: () => (window.location.href = `${SERVER_URL}/logout`)
}
