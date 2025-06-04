import {StyleSheet} from "react-native";
import {COLORS} from "@/style/colors";

export const styles = (isActive: boolean) => StyleSheet.create({
    container: {
        padding: 5,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: isActive && COLORS.primary,
        border: "1px solid " + COLORS.black,
    },
    text: {
        color: COLORS.black,
        fontSize: 12
    },
});