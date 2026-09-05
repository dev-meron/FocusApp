import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { SystemBars } from "react-native-edge-to-edge";

import TaskProvider from "../../contexts/taskContexts";
import ColorProvider, { useColors } from "../../contexts/colorContext";
import { getItems } from "../../utils/storage";
import OnBoardingScreen from "../screens/onBoardingScreen";

export default function Layout() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await getItems("onboardingCompleted");
        setShowOnboarding(value === null);
      } catch (error) {
        console.log(`Error checking onboarding status: ${error}`);
      }
    };

    checkOnboardingStatus();
  }, []);

  const TabLayout = () => {
    const { colors, statusBarStyle } = useColors();

    return (
      <>
        <SystemBars style={statusBarStyle} />
        <Tabs
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.background,
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
            name="setting"
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="settings-outline" size={24} color="grey" />
              ),
            }}
          />
        </Tabs>
      </>
    );
  };

  if (showOnboarding === true) return <OnBoardingScreen />;
  if (showOnboarding === false)
    return (
      <ColorProvider>
        <TaskProvider>
          <TabLayout />
        </TaskProvider>
      </ColorProvider>
    );

  return null;
}
