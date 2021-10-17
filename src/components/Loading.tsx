import React from "react";
import { ActivityIndicator, View } from "react-native";
import { loadingStyles } from "./loading.stylesheet";

const { loadingContainer } = loadingStyles;

export const Loading: React.FC<{}> = () => {
  return (
    <View style={loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};
