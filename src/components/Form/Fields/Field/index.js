import Form from "components/Form"

export default BaseComponent => props => (
    <Form.Consumer>
        {({ set, get }) => {
            const setValue = val => set(props.path, val)
            const value = get(props.path)

            return <BaseComponent {...props} setValue={setValue} value={value} />
        }}
    </Form.Consumer>
)
