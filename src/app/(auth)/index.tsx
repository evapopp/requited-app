import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useGlobalStyles from "../../styles/UseGlobalStyles";

export default function AuthLanding() {
  const router = useRouter();
  const globalStyles = useGlobalStyles()

  return (
    <View style={globalStyles.authContainer}>
      <Text style={globalStyles.title}>Welcome to Requited</Text>
      <Text style={globalStyles.subtitle}>
        Connect, check in, and stay in sync with the people who matter most.
      </Text>

      <View style={globalStyles.buttonContainer}>
        <Button title="Log In" onPress={() => router.push("/(auth)/login")} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button
          title="Sign Up"
          color="#007AFF"
          onPress={() => router.push("/(auth)/signup")}
        />
      </View>
    </View>
  );
}
