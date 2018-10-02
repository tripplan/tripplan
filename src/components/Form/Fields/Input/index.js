import { Input, InputGroup, InputGroupAddon } from "reactstrap"

export default ({ config, onChange, value }) => (
    <InputGroup>
        <InputGroupAddon addonType="prepend">{config.prefix}</InputGroupAddon>
        <Input
            value={value || ""}
            placeholder={config.placeholder}
            onChange={e => onChange(e.target.value)}
        />
        <InputGroupAddon addonType="append">{config.sufix}</InputGroupAddon>
    </InputGroup>
)
