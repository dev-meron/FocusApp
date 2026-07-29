import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import FocusTime from "./components/focusTime";

export default function App() {
  const [switchScreen, setSwitchScreen] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  const changeScreen = () => {
    setSwitchScreen(!switchScreen);
  };

  const addTask = () => {
    const trimmed = task.trim();

    if (trimmed.length > 0) {
      setTasks((prev) => [...prev, trimmed]);
      setTasks("");
      setSelectedTask(trimmed);
    }
  };

  if (switchScreen) {
    return <FocusTime focusTask={selectedTask} onBack={changeScreen} />;
  }

  const handleBack = () => {
    setAddTask((prev) => !prev);
  };

  const handleTextChange = () => {
    setTask(task);
    setTask("");
  };

  if (addTask) {
    return <FocusTime />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder={"what would you like focus....."}
          mode={"outlined"}
          label="Focus"
          style={styles.inputtext}
          value={task}
          onChange={(text) => setTask(text)}
        />
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => {
            addTask();
            changeScreen();
          }}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.focusedTasks}>
        <Text style={styles.focudTitle}>Things we have focused on:</Text>
        {task.map((task, index) => (
          <text key={index} style={styles.taskText}>
            {task}
          </text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090437",
  },

  inputcontainer: {
    flexdirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  inputtext: {
    flex: 1,
  },
  fabButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    marginLeft: 10,
  },
  fabText: {
    fontSize: 20,
    color: "#fff",
  },
  taskText: {
    fontWeight: "semibold",
    fontSize: 18,
    color: "white",
    padding: 10,
  },
});
