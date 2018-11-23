export default ({ style, ...props }) => (
    <div
        style={{
            paddingBottom: "3em",
            paddingTop: "1em",
            width: "80%",
            margin: "auto",
            ...style
        }}
        {...props}
    />
)
