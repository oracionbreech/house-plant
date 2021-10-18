import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenProps } from "./RootStackParams";

import { homeStyles } from "./home.stylesheet";

// Styles
const { headerGroup, subHeaderText, container, header, headerText } =
  homeStyles;

export const Home: React.FC<{}> = ({}) => {
  const { navigate } = useNavigation<HomeScreenProps>();

  const onPress = () => {
    navigate("About");
  };

  const addPlants = () => {};

  return (
    <SafeAreaView>
      <View style={container}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="ellipsis-horizontal-outline" size={40} />
        </TouchableOpacity>
        <View style={header}>
          <View>
            <Text style={headerText}>My Garden</Text>
            <Text style={subHeaderText}>(you have 5 plants)</Text>
          </View>
          <View style={headerGroup}>
            <TouchableOpacity onPress={addPlants}>
              <Icon name="add-circle" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
