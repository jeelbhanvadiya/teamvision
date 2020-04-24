
import React from "react";
import {
    BlobProvider,
    Document,
    Page,
    StyleSheet,
    Text,
    View,Image
} from "@react-pdf/renderer";
import PSPDFKit from "./PSPDFKit";
import img from "../../img/01.jpg"

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column"
    },
    image: {
        width: "100%",
        height: "100%",
        // padding: 10
    },
    centerImage: {
        alignItems: "center",
        flexGrow: 1
    }
});

const MyDocument = (
    <Document>
        <Page style={styles.page} size="A4">
            <View style={styles.centerImage}>
                <Image style={styles.image} src={img} />
            </View>
        </Page>
    </Document>
);
class Certificate extends React.Component{
    render() {
        return(
            <BlobProvider document={MyDocument}>
                {({ blob, url, loading, error }) => {
                    if (blob) {
                        return <PSPDFKit blob={blob} />;
                    }

                    if (error) {
                        return error;
                    }

                    return <div>The PDF is rendering...</div>;
                }}
            </BlobProvider>
        )
    }
}
export default Certificate

