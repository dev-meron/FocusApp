import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
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
      setTask("");
      setSelectedTask(trimmed);
    }
  };

  if (switchScreen) {
    return <FocusTime focusTask={selectedTask} onBack={changeScreen} />;
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
          onChangeText={(text) => setTask(text)}
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
        <Text style={styles.focusTitle}>Things we have focused on:</Text>

        <ImageBackground
          style={styles.taskBackground}
          source={require("./assets/image/backgroundapp.png")}
        >
          <ScrollView
            style={{ padding: 20 }}
            contentContainerStyle={{ gap: 10 }}
          >
            {tasks.map((text, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  changeScreen();
                  setSelectedTask(text);
                }}
              >
                <Text key={index} style={styles.taskText}>
                  -{text}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </ImageBackground>
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
    flexDirection: "row",
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
  focusedTasks: {
    marginTop: 20,
    padding: 10,
    flex: 1,
  },
  fabText: {
    fontSize: 20,
    color: "#fff",
  },
  taskText: {
    fontWeight: "600",
    fontSize: 18,
    color: "white",
    padding: 10,
  },
  taskBackground: {
    flex: 1,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 20,
    marginTop: 10,
  },
});
