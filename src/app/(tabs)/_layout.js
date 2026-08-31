import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TaskProvider from "../../context/taskContext";

export default function Layout() {
  return (
    <TaskProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#252250",
            setOffset: 0,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#6c5cf7",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={24} color="grey" />
            ),
          }}
        />
        <Tabs.Screen
          name="focusTime"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="timer-outline" size={24} color="grey" />
            ),
          }}
        />
      </Tabs>
    </TaskProvider>
  );
}
