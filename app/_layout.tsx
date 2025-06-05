import { createStackNavigator } from '@react-navigation/stack';
import Root from '@/app/root';
import AddTask from '@/app/add-task';
import Task from '@/app/task';
import { Header } from '@/components/Header';
import { ROUTES } from '@/constants/routes';
import { Platform, StatusBar } from 'react-native';
import { COLORS } from '@/style/colors';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.root}
      screenOptions={{
        header: Header,
        cardStyle: {
          backgroundColor: COLORS.white,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      }}
    >
      <Stack.Screen name={ROUTES.root} component={Root} />
      <Stack.Screen name={ROUTES.task} component={Task} />
      <Stack.Screen name={ROUTES.add_task} component={AddTask} />
    </Stack.Navigator>
  );
}
