export default class extends React.Component {
    render() {
        const { renderFields, config } = this.props
        let { items = [] } = config
        items = items.map(item => ({
            ...item,
            path: [config.path, item.path].filter(Boolean).join(".")
        }))

        return renderFields(items)
    }
}
