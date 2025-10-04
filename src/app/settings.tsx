import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import useGlobalStyles from "../styles/UseGlobalStyles";

export default function ProfileScreen() {
  const globalStyles = useGlobalStyles()

  return (
    <View style={globalStyles.container}>
      <Text >Settings here</Text>
      <StatusBar style="auto" />
    </View>
  );
}