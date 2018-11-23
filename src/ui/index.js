export { default as Button } from "@material-ui/core/Button"
export { default as Badge } from "@material-ui/core/Badge"
export { default as Input } from "@material-ui/core/TextField"
export { default as Card } from "@material-ui/core/Card"
export { default as CardHeader } from "@material-ui/core/CardHeader"
export { default as CardBody } from "@material-ui/core/CardContent"
export { default as Grid } from "@material-ui/core/Grid"
export { default as FormControl } from "@material-ui/core/FormControl"
export { default as CardActions } from "@material-ui/core/CardActions"
export { default as Paper } from "@material-ui/core/Paper"
export { default as IconButton } from "@material-ui/core/IconButton"
export { withStyles } from "@material-ui/core/styles"

import CardMediaBase from "@material-ui/core/CardMedia"
export const CardMedia = ({ height, style, ...props }) => <CardMediaBase style={{ height, ...style }} {...props} />

import Typography from "@material-ui/core/Typography"
export const CardTitle = props => <Typography component="h5" variant="h5" {...props} />
export const CardSubtitle = props => <Typography variant="subtitle1" {...props} />
export const CardText = props => <Typography paragraph {...props} />
export const Title = props => <Typography variant="h2" gutterBottom {...props} />
export const NavTitle = props => <Typography color="inherit" variant="h6" {...props} />
