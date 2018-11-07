import { FormGroup } from "reactstrap"

export default class extends React.Component {
    static defaultProps = {
        FieldWrapper: FormGroup
    }
    static registeredFields = {}
    static registerField = function(key, value) {
        this.registeredFields[key] = value
    }
    renderFields = fields => {
        const { FieldWrapper } = this.props
        return fields.map((field, i) => (
            <FieldWrapper key={i}>{this.renderField(field)}</FieldWrapper>
        ))
    }
    renderField = field => {
        if (typeof field !== "object") {
            return field
        }
        const set = val => this.props.set(field.path, val)
        const value = this.props.get(field.path)
        const Component = this.constructor.registeredFields[field.type]

        return Component ? (
            <Component
                config={field}
                onChange={set}
                value={value}
                renderFields={this.renderFields}
                renderField={this.renderField}
            />
        ) : null
    }

    render() {
        return this.renderFields(this.props.fields)
    }
}
