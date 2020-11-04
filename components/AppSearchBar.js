import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AppSearchBar({
  placeholder,
  onChangeText,
  styles,
  value,
  onPress,
}) {
  return (
    <View style={[style.container, styles]}>
      <TextInput
        onChangeText={(value) => onChangeText(value)}
        placeholder={placeholder}
        style={style.input}
        value={value}
      />
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          color="#393b44"
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 50,
  },
  input: {
    fontSize: 30,
    flex: 1,
  },
});
