import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { registerRootComponent } from "expo";
import { Navigation } from "./src/screens";

export default function App() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    <AppLoading
      startAsync={async () => {
        await Font.loadAsync({
          Montserrat: Montserrat_500Medium,
        });
        setReady(true);
      }}
      onFinish={() => setReady(true)}
      onError={() => {}}
    />;
  }

  return <Navigation />;
}
registerRootComponent(App);
