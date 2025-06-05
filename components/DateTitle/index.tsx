import { FC } from 'react';
import { Text, View } from 'react-native';
import { DateTitleProps } from '@/components/DateTitle/types';
import { styles } from '@/components/DateTitle/styles';

export const DateTitle: FC<DateTitleProps> = ({ date }) => (
  <View style={styles.container}>
    <Text style={styles.date}>{date.toString()}</Text>
    <View style={styles.border} />
  </View>
);
