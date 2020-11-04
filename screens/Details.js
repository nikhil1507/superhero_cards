import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DetailsContainer from "../components/DetailsContainer";

export default function Details({ route }) {
  const [det, setDet] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await Axios.get(
      `https://www.superheroapi.com/api.php/1634964520023195/search/${route.params.value}`
    );
    const { results } = data;
    setDet(results[0].powerstats);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: route.params.image.url,
          }}
        />
      </View>
      <DetailsContainer details={det} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
