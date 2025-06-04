import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    task: {
        padding: 8,
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
    },
    title: {
        fontSize: 18,
    },
    executionTime: {
        fontSize: 12,
    },
    description: {
        fontSize: 16,
    },
    actions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});