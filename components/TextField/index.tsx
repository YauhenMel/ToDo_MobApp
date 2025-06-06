import { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { TextFieldProps } from '@/components/TextField/types';

export const TextField: FC<TextFieldProps> = ({
  label,
  onChange,
  value,
  isTouched,
  error,
  isSubmitted,
  onBlur,
  multiline,
}) => (
  <View style={[styles.container, multiline && { flex: 1 }]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && { flex: 1, textAlignVertical: 'top' }]}
      multiline={multiline}
      onChangeText={onChange}
      value={value}
      onBlur={onBlur}
    />
    {(isSubmitted || isTouched) && error && (
      <View>
        <Text style={styles.error}>{error.message}</Text>
      </View>
    )}
  </View>
);
