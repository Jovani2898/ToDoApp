import React, {useState, useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Provider, useDispatch, useSelector} from 'react-redux';
import {SplashScreen} from './src/components/splashScreen/SplashScreen';

import {ITask, Task} from './src/components/task/Task';
import {addTask, removeTask} from './src/redux/actions/root';
import {store} from './src/redux/store';

const App = () => {
  const [task, setTask] = useState<string | null>(null);

  const [playSplash, setPlaySplash] = useState(true);

  const dispatch = useDispatch();

  const taskItems = useSelector(
    (state: {root: {tasks: ITask[]}}) => state.root.tasks,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaySplash(false);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task !== null) {
      dispatch(addTask({id: new Date().getTime().toString(), text: task}));
    }
    setTask('');
  };

  return (
    <>
      {playSplash ? (
        <SplashScreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <View style={styles.items}>
              {taskItems.map(taskItem => {
                return (
                  <TouchableOpacity
                    onPress={() => dispatch(removeTask(taskItem.id))}
                    key={taskItem.id}>
                    <Task {...taskItem} key={taskItem.id} />
                  </TouchableOpacity> // после handleAddTask мы изменили state
                  //куда поместили ITask(text и id), соответсвенно мы используем их тут в пропсах
                  // c помощью ...taskItem
                );
              })}
            </View>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTask}>
            <TextInput
              style={styles.input}
              placeholder="write a task"
              value={task || ''}
              onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </>
  );
};

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
