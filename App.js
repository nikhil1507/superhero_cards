import React from "react";
import Details from "./screens/Details";
import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="details" component={Details} />
  </Stack.Navigator>
);

export default function App() {
  return <Details />;
}
