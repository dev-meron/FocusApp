import { createContext, useContext, useState } from "react";
import {
  darkStatusBar,
  lightStatusBar,
  darkTheme,
  lightTheme,
} from "../utilis/color.js";
import { retrySymbolicateLogNow } from "react-native/types_generated/Libraries/LogBox/Data/LogBoxData";

const colorContext = createContext();

export default function colorProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const colors = isDark ? darkTheme : lightTheme;
  const statusBarStyle = isDark ? lightStatusBar : darkStatusBar;
  const value = { colors, statusBarStyle, toggleTheme, isDark };

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
}

export const useColor = () => {
  const context = useContext(colorContext);
  if (!context) {
    throw new Error("usecolors must be used within a colorProvider");
  }
  return context;
};
