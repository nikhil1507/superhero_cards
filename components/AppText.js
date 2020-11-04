import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children, styles }) {
  return <Text style={[style.text, styles]}>{children}</Text>;
}

const style = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
