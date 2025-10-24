import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import useGlobalStyles from "../../styles/UseGlobalStyles";
export default function HistoryScreen() {
  const globalStyles = useGlobalStyles()

  return (
    <View style={globalStyles.container}>
      <Text >Archive here</Text>
      <StatusBar style="auto" />
    </View>
  );
}