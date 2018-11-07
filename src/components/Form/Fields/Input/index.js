import { Input, InputGroup, InputGroupAddon } from "reactstrap"

export default ({ config, onChange, value }) => (
    <InputGroup>
        {config.prefix && <InputGroupAddon addonType="prepend">{config.prefix}</InputGroupAddon>}
        <Input
            value={value || ""}
            placeholder={config.placeholder}
            onChange={e => onChange(e.target.value)}
        />
        {config.sufix && <InputGroupAddon addonType="append">{config.sufix}</InputGroupAddon>}
    </InputGroup>
)
