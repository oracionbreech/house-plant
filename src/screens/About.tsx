import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";

import { AboutScreenProps } from "./RootStackParams";

export const About: React.FC<{}> = ({}) => {
  const navigation = useNavigation<AboutScreenProps>();

  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text onPress={onPress}>About</Text>
    </View>
  );
};
