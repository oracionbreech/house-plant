import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        display: "flex",
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    },
    headerGroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerText: {
        width: 'auto',
        fontSize: 35,
        fontFamily: "Montserrat",
    },
    subHeaderText: {
        fontSize: 15,
        fontFamily: "Montserrat",
        color: '#d3d3d3',
    }
});
