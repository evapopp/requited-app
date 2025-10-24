import { Slot } from "expo-router";
import { useSupabaseSession } from "../hooks/useSupabaseSession";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const { loading } = useSupabaseSession()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
  return <Slot />
}
