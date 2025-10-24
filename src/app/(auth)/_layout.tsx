import { Stack, Redirect } from "expo-router";
import { useSupabaseSession } from "../../hooks/useSupabaseSession";

export default function AuthLayout() {
  const { session, loading } = useSupabaseSession();

  if (loading) return null;

  if (session) return <Redirect href="/(app)/" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
