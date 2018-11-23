import { WithAuth } from "providers/Auth"
import Page from "components/Page"
import { Button, Title } from "ui"

class HomePage extends React.Component {
    render() {
        const { auth } = this.props
        return (
            <Page>
                <Title>HOME PAGE</Title>
                {auth.user && <Link to={`/trips`}>{"Trips ->"}</Link>}
                {!auth.user && <Button onClick={auth.logIn}>LOG IN</Button>}
            </Page>
        )
    }
}

export default WithAuth(HomePage)
