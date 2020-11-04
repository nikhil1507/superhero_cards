import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DetailsText from "./DetailsText";

export default function DetailsContainer({ details }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1b262c",
        overflow: "hidden",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 5,
      }}
    >
      <ScrollView>
        {Object.keys(details).map((key) => (
          <DetailsText key={key} property={key} details={details[key]} />
        ))}
      </ScrollView>
    </View>
  );
}
