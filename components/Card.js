import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./AppText";

export default function Card({ source, onPress, title }) {
  return source ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground source={source} style={styles.img}></ImageBackground>
        <LinearGradient
          colors={["#440047", "#31112c"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
            opacity: 0.4,
          }}
          start={[0.1, 0.3]}
          end={[0.8, 0.9]}
        />
        <AppText
          styles={{
            color: "white",
            position: "absolute",
            bottom: 10,
            left: 10,
            fontSize: 25,
          }}
        >
          {title}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <AppText styles={{ fontSize: 35, textAlign: "center", marginTop: 250 }}>
      Please Provide a Source Url
    </AppText>
  );
}

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "cover",
    width: 350,
    height: 450,
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
    height: 450,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    marginHorizontal: 10,
  },
});
