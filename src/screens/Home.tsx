import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, Text, View } from "react-native";
import { About } from "./About";
import { HomeScreenProps } from "./RootStackParams";

export const Home: React.FC<{}> = ({}) => {
  const { navigate } = useNavigation<HomeScreenProps>();

  const onPress = () => {
    navigate("About");
  };

  return (
    <View>
      <Text onPress={onPress}>Home</Text>
    </View>
  );
};
