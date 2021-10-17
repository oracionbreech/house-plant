import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
}

// Screen Navigation Props
export type HomeScreenProps = StackNavigationProp<RootStackParamList>
export type AboutScreenProps = StackNavigationProp<RootStackParamList>