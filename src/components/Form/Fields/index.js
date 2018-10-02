import { FormGroup } from "reactstrap"

/*
idea:
	Fields.register(type, Component)

ie:
	Fields.register("input", Input)
	Fields.register("toggle", Toggle)
*/

export default class extends React.Component {
    static defaultProps = {
        FieldWrapper: FormGroup
    }
    static registeredFields = {}
    static register = function(key, value) {
        this.registeredFields[key] = value
    }
    renderFields = fields => {
        const { FieldWrapper } = this.props
        return fields.map((field, i) => {
            return <FieldWrapper key={i}>{this.renderField(field)}</FieldWrapper>
        })
    }
    renderField = field => {
        const set = val => this.props.set(field.path, val)
        const value = this.props.get(field.path)
        const Component = this.constructor.registeredFields[field.type]
        if (Component) {
            return <Component config={field} onChange={set} value={value} />
        }
        return null
    }

    render() {
        const { fields } = this.props
        return <>{this.renderFields(fields)}</>
    }
}
