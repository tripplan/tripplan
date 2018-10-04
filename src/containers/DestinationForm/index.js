import Form from "components/Form"

export default props => (
    <Form
        fields={[
            { prefix: "Title", path: "title", type: "input" },
            { prefix: "Post Time", path: "posttime", type: "input" },
            { prefix: "Image", path: "image", type: "input" },
            { prefix: "Description", path: "description", type: "input" }
        ]}
        {...props}
    />
)
