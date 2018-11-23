import { Input, FormControl } from "ui"

export default ({ label, placeholder, setValue, value }) => (
    <FormControl fullWidth margin="normal">
        <Input label={label} value={value} defaultValue={placeholder} onChange={e => setValue(e.target.value)} />
    </FormControl>
)
