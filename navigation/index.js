import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import SearchScreen from "../screen/SearchScreen";
import DetailScreen from "../screen/DetailScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
    </Stack.Navigator>
  );
}
