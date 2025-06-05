import { View } from 'react-native';
import { TextField } from '@/components/TextField';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DateField } from '@/components/DateField';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/add-task/styles';
import { addTask } from '@/API';
import { CreateTaskDto } from '@/app/add-task/types';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';

export default function AddTask() {
  const navigation = useNavigation();

  const taskSchema = z.object({
    title: z
      .string()
      .trim()
      .min(1, { message: 'Field is required' })
      .min(2, { message: 'At least 2 characters' })
      .max(150, { message: 'Max number of letters is 150' }),
    description: z
      .string()
      .trim()
      .min(1, { message: 'Field is required' })
      .min(2, { message: 'At least 2 characters' })
      .max(300, { message: 'Max number of letters is 300' }),
    location: z
      .string()
      .trim()
      .min(1, { message: 'Field is required' })
      .min(2, { message: 'At least 2 characters' })
      .max(250, { message: 'Max number of letters is 250' }),
    executionTime: z.date().min(new Date(), { message: 'Invalid date' }),
  });

  const getDefaultExecutionTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 3);
    return now;
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitted },
  } = useForm({
    defaultValues: {
      title: '',
      location: '',
      description: '',
      executionTime: getDefaultExecutionTime(),
    },
    mode: 'onBlur',
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = async (data: CreateTaskDto) => {
    try {
      const task = await addTask(data);

      navigation.navigate(ROUTES.task, { id: task.id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <View style={styles.fields_container}>
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Title"
              {...field}
              {...fieldState}
              isSubmitted={isSubmitted}
            />
          )}
          name="title"
        />
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Description"
              {...field}
              {...fieldState}
              isSubmitted={isSubmitted}
              multiline
            />
          )}
          name="description"
        />
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Location"
              {...field}
              {...fieldState}
              isSubmitted={isSubmitted}
            />
          )}
          name="location"
        />
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <DateField
              label="Execution time"
              {...field}
              {...fieldState}
              isSubmitted={isSubmitted}
            />
          )}
          name="executionTime"
        />
      </View>
      <Button filled onPress={handleSubmit(onSubmit)}>
        Add new task
      </Button>
    </SafeAreaView>
  );
}
