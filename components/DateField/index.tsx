import {FC, useState} from "react";
import {Text, TextInput, View} from "react-native";
import { styles } from "./styles";
import {DateFieldProps} from "@/components/DateField/types";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import DateIcon from "@/assets/icons/DateIcon";
import {COLORS} from "@/style/colors";
import {Button} from "@/components/Button";
import {formatDate} from "@/utils/formatDate";

export const DateField:FC<DateFieldProps> = ({ label, onChange, value, isTouched, error, isSubmitted, onBlur, multiline}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [mode, setMode] = useState<'date' | 'time'>('date');

    const handleSetShowDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    }

    const handleOnChangeDateTime = (event: DateTimePickerEvent, value?: Date) => {
        if(event.type === 'dismissed') {
            handleSetShowDatePicker();
        }

        if(value && event.type === 'set') {
            onChange(value);

            if(mode === 'date') setMode('time');
            if(mode === 'time') {
                setMode('date');
                handleSetShowDatePicker();
            }

        }
    }

    return (
        <View >
            <Text>{label}</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} value={formatDate(value)} onBlur={onBlur} editable={false}/>
                <View style={styles.datePickerButton}>
                    <Button onPress={handleSetShowDatePicker}><DateIcon stroke={COLORS.black} fill={COLORS.black}/></Button>
                </View>
            </View>

                {((isSubmitted || isTouched) && error) && (<View>
                    <Text style={styles.error}>{error.message}</Text>
                </View>)
                }
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={value}
                        mode={mode}
                        is24Hour={true}
                        onChange={handleOnChangeDateTime}
                    />
                )}
        </View>
    );
}

