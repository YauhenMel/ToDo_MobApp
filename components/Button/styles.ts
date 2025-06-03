import {StyleSheet} from "react-native";
import {COLORS} from "@/style/colors";

export const styles = (filled) => StyleSheet.create({
    container: {
        padding: 8,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: filled && COLORS.primary,
        border: filled && "2px solid " + COLORS.black
    },
    text: {
        color: COLORS.black,
        fontSize: 18
    },
});