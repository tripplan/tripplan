import { WithAuth } from "providers/Auth"
import Fetch from "components/Fetch"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import UserCard from "containers/UserCard"
import api from "api"

class HomePage extends React.Component {
    renderLayout = ({ response }) => {
        const { auth } = this.props
        return (
            <Page>
                <h3>HOME PAGE</h3>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                <Placeholder delayMS={500} ready={response} fallback={Spinner}>
                    {() =>
                        response.map(user => (
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
        return <Fetch using={api.db.people.query} render={this.renderLayout} />
    }
}

export default WithAuth(HomePage)
