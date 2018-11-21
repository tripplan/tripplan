import { Input, InputGroup, InputGroupAddon } from "reactstrap"

export default ({ label, placeholder, sufix, setValue, value }) => (
    <InputGroup>
        {label && <InputGroupAddon addonType="prepend">{label}</InputGroupAddon>}
        <Input value={value || ""} placeholder={placeholder} onChange={e => setValue(e.target.value)} />
        {sufix && <InputGroupAddon addonType="append">{sufix}</InputGroupAddon>}
    </InputGroup>
)
