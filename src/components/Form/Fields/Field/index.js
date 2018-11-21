import Form from "components/Form"
import { FormGroup } from "reactstrap"

export default BaseComponent => props => (
    <FormGroup>
        <Form.Consumer>
            {({ set, get }) => {
                const setValue = val => set(props.path, val)
                const value = get(props.path)

                return <BaseComponent {...props} setValue={setValue} value={value} />
            }}
        </Form.Consumer>
    </FormGroup>
)
