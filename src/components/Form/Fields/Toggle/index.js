import { Button } from "reactstrap"

export default ({ config, onChange, value }) => (
    <Button size="sm" color={value ? "primary" : "secondary"} onClick={() => onChange(!value)}>
        {value ? config.label.on : config.label.off}
    </Button>
)
