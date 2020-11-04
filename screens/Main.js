import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import AppView from "../components/AppView";
import AppSearchBar from "../components/AppSearchBar";
import Card from "../components/Card";
import Axios from "axios";

export default function Main({ navigation }) {
  const [inp, setInp] = useState("");
  const [val, setVal] = useState("");
  const [superData, setSuperData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const handleChangeText = (value) => {
    setVal("");
    setInp(value);
    setVal(value);
  };

  const getData = async () => {
    const { data } = await Axios.get(
      `https://www.superheroapi.com/api.php/1634964520023195/search/batman`
    );
    const { results } = data;
    setSuperData(results);
  };

  const handlePress = async () => {
    setShow(true);
    try {
      const { data } = await Axios.get(
        `https://www.superheroapi.com/api.php/1634964520023195/search/${inp}`
      );
      const { results } = data;
      if (!results) return setShow(false);
      setSuperData(results);
      setShow(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <AppView
      styles={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={styles.searchContainer}>
        <AppSearchBar
          value={inp}
          onChangeText={handleChangeText}
          placeholder="Search"
          onPress={handlePress}
        />
      </View>
      {show ? (
        <ActivityIndicator
          style={{ flex: 1 }}
          color="tomato"
          size="large"
          animating={show}
        />
      ) : (
        <ScrollView horizontal>
          {superData.map((card) => (
            <Card
              key={card.id}
              source={{ uri: card.image.url }}
              onPress={() => {
                navigation.navigate("details", {
                  image: card.image,
                  value: val,
                });
                setInp("");
              }}
            />
          ))}
        </ScrollView>
      )}
    </AppView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
  },
});
