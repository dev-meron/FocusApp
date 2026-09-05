import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItems = async (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log(`Error saving "${key}": ${error}`);
  }
};

export const getItems = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  } catch (error) {
    console.log(`Error reading "${key}": ${error}`);
    return null;
  }
};

export const removeItems = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`Error removing "${key}": ${error}`);
  }
};
