import { WithAuth } from "providers/Auth"
import WithJSON from "components/WithJSON"
import { Link } from "react-router-dom"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import UserCard from "components/UserCard"
import api from "api"

class HomePage extends React.Component {
    renderLayout = ({ json }) => {
        const { auth } = this.props
        return (
            <Page>
                <h3>HOME PAGE</h3>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                <Placeholder delayMS={500} ready={json} fallback={Spinner}>
                    {() =>
                        json.map(user => (
                            <UserCard
                                key={user.id}
                                className="my-4"
                                user={user}
                                onClick={() => auth.logIn(user)}
                            />
                        ))
                    }
                </Placeholder>
            </Page>
        )
    }
    render() {
        const url = api.db.people.query()
        return <WithJSON url={url} render={this.renderLayout} />
    }
}

export default WithAuth(HomePage)
