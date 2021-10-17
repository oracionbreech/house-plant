import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import { About } from "../screens/About";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
