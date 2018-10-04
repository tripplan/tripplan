import { WithAuth } from "providers/Auth"
import Fetch from "components/Fetch"
import Placeholder from "components/Placeholder"
import Spinner from "components/Spinner"
import Page from "components/Page"
import UserCard from "containers/UserCard"
import api from "api"
import { Button } from "reactstrap"

class HomePage extends React.Component {
    render() {
        const { auth } = this.props
        return (
            <Page>
                <h3>HOME PAGE</h3>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                {!auth.user && (
                    <Button onClick={() => (window.location.href = `http://localhost:3000/login`)}>
                        LOG IN
                    </Button>
                )}
            </Page>
        )
    }
}

export default WithAuth(HomePage)
