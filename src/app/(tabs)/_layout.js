import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TaskProvider from "../../context/taskContext";
import colorProvider from "../../context/colorContext";
import { useColor } from "../../context/colorContext";
import { SystemBars } from "react-native-edge-to-edge";
import { setStatusBarStyle } from "expo-status-bar";

export default function Layout() {
  const {colors} = useColor;
  const TabLayout = () => {
    return (
    <>
    <SystemBars style={setStatusBarStyle}/>
    <Tabs
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.background,
              setOffset: 0,
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: colors.Primary,
            tabBarInactiveTintColor: colors.textPrimary,
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
          <Tabs.Screen 
            name='setting',
            options={{
              headerShown: false,
              tabBarIcon :() =>(
                <Ionicons name= 'setting-outline' size={24} color='grey'/>
              )
            }}
          />
        </Tabs>
        </>
    
    )
    
  }
  
  return (
    <colorProvider>
      <TaskProvider>
        <TabLayout/>
      </TaskProvider>
    </colorProvider>
  );
}
