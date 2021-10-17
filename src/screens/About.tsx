import { useNavigation } from "@react-navigation/core";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
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
