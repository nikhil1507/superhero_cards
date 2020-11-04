import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function AppView({ children, styles }) {
  return <View style={[style.container, styles]}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
