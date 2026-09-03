import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useColor } from "../../context/colorContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { SystemBars } from "react-native-edge-to-edge";
import { Ionicons } from "@expo/vector-icons";

const Setting = () => {
  const { colors, toggleTheme, statusBarStyle, isDark } = useColor();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          background: colors.background,
        },
      ]}
    >
      <SystemBars style={statusBarStyle} />
      <Text style={{ fontSize: 20, color: colors.textPrimary }}>
        setting screen{" "}
      </Text>
      <view>
        <Pressable
          onPress={toggleTheme}
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: colors.primary,
          }}
        >
          <Text style={{ color: colors.onPrimary, fontSize: 16 }}>
            {" "}
            change Theme color
          </Text>
          <Ionicons
            name={isDark ? "moon" : "sunny"}
            size={20}
            color={colors.onPrimary}
            style={{ marginLeft: 10 }}
          />
        </Pressable>
      </view>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Setting;
