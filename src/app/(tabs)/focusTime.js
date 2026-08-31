import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { SystemBars } from "react-native-edge-to-edge";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useTasks } from "../../context/taskContext";

export default function FocusTime() {
  const times = [5, 900, 1200];
  const { tasks, setTasks, selectedTask } = useTasks();
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const focusTask = selectedTask;

  const timeFormat = (times) => {
    const minute = Math.floor(times / 60);
    const second = Math.floor(times % 60);

    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  const showToast = () => {
    Toast.show({
      position: "bottom",
      type: "success",
      text1: `you have succesfully focused on ${focusTask}`,
    });
  };

  useEffect(() => {
    if (!isRunning || selectedTime === null) return;

    if (selectedTime <= 0) {
      setIsRunning(false);
      showToast();
      setTasks((prev) => [...prev, selectedTask]);
      return;
    }

    const intervalId = setInterval(() => {
      setSelectedTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, selectedTime]);

  return (
    <ImageBackground
      style={styles.imageBackground}
      resizeMode="cover"
      source={require("../../../assets/image/backgroundfocus.png")}
    >
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.backBotton}
            onPress={() => {
              router.back();
              setSelectedTime(null);
            }}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={{ color: "white" }}>Back</Text>
          </TouchableOpacity>

          <SystemBars style="light" />
          <Text style={styles.timerText}>
            {selectedTime ? timeFormat(selectedTime) : "00:00"}
          </Text>

          <Text style={styles.subTitle}>Focusing on:</Text>
          <Text style={styles.focusTask}>{focusTask}</Text>

          <View
            style={{
              height: 10,
              width: "100%",
              backgroundColor: "#241b9a",
              marginTop: 30,
              marginBottom: 20,
            }}
          />

          <View style={styles.timeoption}>
            {times.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={styles.timeoptionsButton}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={styles.timeoptionText}>{timeFormat(time)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.startFab}
            onPress={() => {
              setIsRunning(!isRunning);
            }}
          >
            <Text style={{ color: "white" }}>
              {isRunning ? "Paused" : "Start"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Toast />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
  },
  timerText: {
    fontWeight: "bold",
    fontSize: 60,
    color: "white",
    marginTop: 50,
  },
  subTitle: {
    fontSize: 18,
    color: "white",
    marginTop: 50,
  },
  focusTask: {
    fontSize: 30,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  timeoption: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "space-between",
    width: "100%",
    justifyContent: "space-around",
  },
  timeoptionsButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  timeoptionText: {
    color: "white",
    fontSize: 18,
  },
  startFab: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "transparent",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  backBotton: {
    flexDirection: "row",
    height: 40,
    width: 80,
    borderRadius: 25,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
