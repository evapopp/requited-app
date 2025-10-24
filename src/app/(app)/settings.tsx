import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import useGlobalStyles from "../../styles/UseGlobalStyles";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";
import { Button } from "react-native";

export default function ProfileScreen() {
  const globalStyles = useGlobalStyles()
    const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/(auth)/");
  }

  return (
    <View style={globalStyles.container}>
      <Text >Settings here</Text>
      <Button title="Log Out" onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
}