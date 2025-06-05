import { View } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { FC, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';
import { formatDateWithoutTime } from '@/utils/formatDate';
import {DatePickerModalProps} from "@/components/DatePickerModal/type";

export const DatePickerModal: FC<DatePickerModalProps> = ({
  show,
  setShow,
}) => {
  const [date, setDate] = useState(new Date());

  const navigation = useNavigation();
  const route = useRoute();

  const statusParam = route.params?.status;

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate && event.type === 'set') {
      setDate(selectedDate);

      navigation.navigate(ROUTES.root, {
        createdAt: formatDateWithoutTime(selectedDate),
        status: statusParam,
      });
    }

    setShow(false);
  };

  return (
    <View>
      <Modal hideModalContentWhileAnimating isVisible={show}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      </Modal>
    </View>
  );
};
