import { createStackNavigator } from '@react-navigation/stack';

import Root from "@/app/root";
import AddTask from "@/app/add-task";
import Task from "@/app/task";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="root">
        <Stack.Screen name="root" component={Root} />
        <Stack.Screen name="task" component={Task} />
        <Stack.Screen name="add-task" component={AddTask} />
      </Stack.Navigator>
          );
}
