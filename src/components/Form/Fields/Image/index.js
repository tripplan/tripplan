import { Card, CardImg, Nav, NavLink } from "reactstrap"

import Cropper from "react-cropper"
import "cropperjs/dist/cropper.css"
import api from "api"

export default class extends React.Component {
    static defaultProps = {
        onSave: (crop, done) => done(crop.toDataURL())
    }
    state = {
        cropping: false,
        saving: false,
        error: undefined
    }
    handleSave = () => {
        this.props.onSave(this.refs.cropper.getCroppedCanvas(), this.done)
    }

    done = (value, error) => {
        if (value) {
            this.props.onChange(value)
            this.toggleCropping(false)
        }
        this.setState({ saving: false, error })
    }

    toggleCropping = cropping => this.setState({ cropping })

    render() {
        const { value, config } = this.props

        try {
            new URL(value)
        } catch (e) {
            return null
        }

        const { aspectRatio = 16 / 9 } = config
        const { cropping } = this.state
        const isDataUrl = value.indexOf("data") === 0

        return (
            <Card>
                <Nav>
                    <NavLink href="#" onClick={() => this.toggleCropping(!cropping)}>
                        {cropping ? "Back" : "Crop"}
                    </NavLink>
                    {cropping && (
                        <NavLink className="right" href="#" onClick={this.handleSave}>
                            Save
                        </NavLink>
                    )}
                </Nav>
                {!cropping && <CardImg top width="100%" src={value} />}
                {cropping && (
                    <Cropper
                        ref="cropper"
                        viewMode={1}
                        responsive={false}
                        src={isDataUrl ? value : api.fwd(value)}
                        style={{ height: 400, width: "100%" }}
                        // Cropper.js options
                        aspectRatio={aspectRatio}
                    />
                )}
            </Card>
        )
    }
}
