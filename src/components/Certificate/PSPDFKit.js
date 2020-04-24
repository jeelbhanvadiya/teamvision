import React, { Component } from "react";

export default class PSPDFKit extends Component {
    containerRef = React.createRef();

    componentDidMount() {
        debugger
        const url = URL.createObjectURL(this.props.blob);
        window.open(url)
    }
    //     window.PSPDFKit.load({
    //         pdf: url,
    //         container: this.containerRef.current,
    //         licenseKey: LICENSE_KEY
    //     });
    // }

    componentWillUnmount() {
        window.PSPDFKit.unload(this.containerRef.current);
    }

    render() {
        return (
            <div
                ref={this.containerRef}
                style={{ width: "100%", height: "100%", position: "absolute" }}
            />
        );
    }
}
