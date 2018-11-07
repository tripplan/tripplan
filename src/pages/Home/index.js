import { WithAuth } from "providers/Auth"
import Page from "components/Page"
import { Button } from "reactstrap"

class HomePage extends React.Component {
    render() {
        const { auth } = this.props
        return (
            <Page>
                <h3>HOME PAGE</h3>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                {!auth.user && <Button onClick={auth.logIn}>LOG IN</Button>}
            </Page>
        )
    }
}

export default WithAuth(HomePage)
