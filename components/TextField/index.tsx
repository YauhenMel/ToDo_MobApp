import {FC} from "react";
import {Text, TextInput, View} from "react-native";
import { styles } from "./styles";
import {TextFieldProps} from "@/components/TextField/types";

export const TextField:FC<TextFieldProps> = ({ label, onChange, value, isTouched, error, isSubmitted, onBlur}) => (
        <View>
            <Text>{label}</Text>
            <TextInput style={styles.input} onChangeText={onChange} value={value} onBlur={onBlur}/>
            {((isSubmitted || isTouched) && error) && (<View>
                <Text style={styles.error}>{error.message}</Text>
            </View>)
            }
        </View>
    );

