import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenProps } from "./RootStackParams";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/dev";
import { homeStyles } from "./home.stylesheet";

// Styles

const { subHeaderText, container, header, headerText, loadingContainer } =
  homeStyles;

export const Home: React.FC<{}> = ({}) => {
  const [loaded] = useFonts({ Montserrat_500Medium });

  const { navigate } = useNavigation<HomeScreenProps>();

  const onPress = () => {
    navigate("About");
  };

  return loaded ? (
    <View style={container}>
      <Icon name="ellipsis-horizontal-outline" size={40} onPress={onPress} />
      <View style={header}>
        <Text style={headerText}>My Garden</Text>
        <Text style={subHeaderText}>(you have 5 plants)</Text>
      </View>
    </View>
  ) : (
    <View style={loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};
