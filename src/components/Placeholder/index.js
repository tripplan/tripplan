export default class extends React.Component {
    state = {
        showPlaceholder: false
    }

    componentDidMount() {
        this._startNewTimeoutIfNotReady()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ready !== this.props.ready) {
            this._startNewTimeoutIfNotReady()
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.ready && state.showPlaceholder) {
            return {
                showPlaceholder: false
            }
        }

        return null
    }

    _startNewTimeoutIfNotReady() {
        const { ready, delayMS = 0 } = this.props
        clearTimeout(this.delayTimeout)
        if (!ready) {
            this.delayTimeout = setTimeout(() => this.setState({ showPlaceholder: true }), delayMS)
        }
    }

    componentWillUmount() {
        clearTimeout(this.delayTimeout)
    }

    render() {
        const { showPlaceholder } = this.state
        const { children, render, ready, fallback = null } = this.props
        const rndr = children || render

        return ready ? rndr(ready) : showPlaceholder ? fallback(ready) : null
    }
}
