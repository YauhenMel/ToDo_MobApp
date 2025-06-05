import { Text, View } from 'react-native';
import { FC, useState } from 'react';
import { Link } from '@/components/Link';
import { ROUTES } from '@/constants/routes';
import PlusIcon from '@/assets/icons/PlusIcon';
import { COLORS } from '@/style/colors';
import { styles } from '@/components/Header/styles';
import { Tag } from '@/components/Tag';
import DateIcon from '@/assets/icons/DateIcon';
import { Button } from '@/components/Button';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

export const Header: FC = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date) setDate(date);

    setShow(false);
  };

  const handleShowDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Your tasks</Text>
        <Link to={ROUTES.add_task}>
          <PlusIcon fill={COLORS.black} />
        </Link>
      </View>
      <View style={styles.sorter}>
        <View style={styles.sorterByStatus}>
          <Tag label="All" />
          <Tag status="in_progress" label="In Progress" />
          <Tag status="completed" label="Completed" />
          <Tag status="canceled" label="Canceled" />
        </View>
        <View>
          <Button onPress={handleShowDatePicker}>
            <DateIcon stroke={COLORS.black} fill={COLORS.black} />
          </Button>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </View>
  );
};
