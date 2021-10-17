import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigator from "../routes/Navigator";

export const Navigation: React.FC<{}> = () => {
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
};
