import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenProps } from "./RootStackParams";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/dev";
import { homeStyles } from "./home.stylesheet";
import { Loading } from "../components/Loading";

// Styles

const { headerGroup, subHeaderText, container, header, headerText } =
  homeStyles;

export const Home: React.FC<{}> = ({}) => {
  const [loaded] = useFonts({ Montserrat_500Medium });

  const { navigate } = useNavigation<HomeScreenProps>();

  const onPress = () => {
    navigate("About");
  };

  const addPlants = () => {};

  if (!loaded) {
    return <Loading />;
  }

  return (
    <View style={container}>
      <Icon name="ellipsis-horizontal-outline" size={40} onPress={onPress} />
      <View style={header}>
        <View>
          <Text style={headerText}>My Garden</Text>
          <Text style={subHeaderText}>(you have 5 plants)</Text>
        </View>
        <View style={headerGroup}>
          <Icon name="add-circle" size={40} onPress={addPlants} />
        </View>
      </View>
    </View>
  );
};
