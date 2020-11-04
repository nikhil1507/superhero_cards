import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./screens/Main";
import Details from "./screens/Details";

const Stack = createStackNavigator();
const StackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="main" component={Main} />
    <Stack.Screen name="details" component={Details} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
