import {StyleSheet} from "react-native";
import {COLORS} from "@/style/colors";

export const styles = StyleSheet.create({
    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sorter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        rowGap: 8
    },
    sorterByStatus: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    }
});