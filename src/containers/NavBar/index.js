import Login from "containers/Login"

export default () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/trips">Trips</Link>
            </li>
        </ul>
        <Login />
        <hr />
    </div>
)
