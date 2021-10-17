import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
    },
    container: {
        padding: 20,

    },
    header: {
        display: "flex",
    },
    headerText: {
        fontSize: 35,
        fontFamily: "Montserrat_500Medium",
    },
    subHeaderText: {
        fontSize: 15,
        fontFamily: "Montserrat_500Medium",
        color: '#d3d3d3'
    }
});
