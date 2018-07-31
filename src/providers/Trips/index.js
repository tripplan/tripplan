import React, { Component } from "react"

export const TripsContext = React.createContext()
export const TripsConsumer = TripsContext.Consumer

export default class extends Component {
    state = {
        trips: []
    }
    fetchData = user => {
        if (!user) return
        fetch(`http://localhost:3000/trips?people_like=${user.id}`)
            .then(res => res.json())
            .then(trips => this.setState({ trips }))
    }
    componentDidMount() {
        this.fetchData(this.props.auth.user)
    }
    componentDidUpdate(prevProps) {
        // If the auth changes, fetch new trip data for the current user
        if (this.props.auth.user !== prevProps.auth.user) {
            this.fetchData(this.props.auth.user)
        }
    }
    render = () => (
        <TripsContext.Provider value={this.state}>
            {this.props.children}
        </TripsContext.Provider>
    )
}

export const WithTrips = BaseComponent => {
    return props => (
        <TripsContext.Consumer>
            {state => <BaseComponent trips={state.trips} {...props} />}
        </TripsContext.Consumer>
    )
}
