import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigator from "./src/routes/Navigator";

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: "black",
          background: "white",
          card: "black",
          text: "black",
          border: "black",
          notification: "black",
        },
        dark: false,
      }}
    >
      <Navigator />
    </NavigationContainer>
  );
}
