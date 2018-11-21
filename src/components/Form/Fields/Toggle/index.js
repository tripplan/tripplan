import { Button } from "reactstrap"

export default ({ labelOn, labelOff, setValue, value }) => (
    <Button size="sm" color={value ? "primary" : "secondary"} onClick={() => setValue(!value)}>
        {value ? labelOn : labelOff}
    </Button>
)
