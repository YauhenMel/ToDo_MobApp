import { View, Text } from 'react-native';
import {Button} from "@/components/Button";
import {SafeAreaView} from "react-native-safe-area-context";
import {formatDate} from "@/utils/formatDate";
import {styles} from "@/app/task/styles";

const task = {
    id: 1,
    title: 'Task 1',
    description: 'Task 1 sijsdids idsidi sdjisdj dsjijdis Task 1djisdijd dsijdijsid ijdsijdisj',
    status: 'canceled',
    executionTime: new Date('2020-11-25T12:37')
}

export default function Task() {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
            <View style={styles.task}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.executionTime}>{formatDate(task.executionTime)}</Text>
                <Text style={styles.description}>{task.description}</Text>
            </View>
            <View style={styles.actions}>
                <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                <Button filled onPress={() => console.log('Completed')}>Completed</Button>
            </View>
        </SafeAreaView>
    );
}
