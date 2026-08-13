import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function FocusTime({ focusTask, onBack }) {
  const times = [600, 900, 1200];
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const timeFormat = (times) => {
    const minute = Math.floor(times / 60);
    const second = Math.floor(times % 60);

    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setSelectedTime((prev) => prev - 1);
    }, 1000);

    if (!isRunning || selectedTime <= 0) {
      clearInterval(intervalId);
    } else if (selectedTime == 0) {
      Alert.alert(`you have succesfully focused on ${focusTask}`);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, selectedTime]);

  return (
    <SafeAreaView styles={styles.container}>
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
            onPress={() => setSelectedTime(times)}
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
        <Text style={{ color: "white" }}>{isRunning ? "Paused" : "Start"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBotton} onPress={onBack}>
        <Text style={{ color: "white" }}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252250",
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
    marginTop: 50,
    height: 50,
    width: 100,
    borderRadius: 25,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
