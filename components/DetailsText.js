import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
export default function DetailsText({ property, details }) {
  return (
    <>
      <View style={styles.detailsContainer}>
        <AppText styles={styles.text}>{property}</AppText>
        <AppText styles={styles.text}>{details}</AppText>
      </View>
      <View
        style={{ backgroundColor: "#eee", height: 1, width: "100%" }}
      ></View>
    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
