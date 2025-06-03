import {StyleSheet} from "react-native";
import {COLORS} from "@/style/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        alignItems: "center",
        borderRadius: 10,
        border: "1px solid " + COLORS.black,
    },
    text: {
        color: COLORS.black,
        fontSize: 18
    },
});