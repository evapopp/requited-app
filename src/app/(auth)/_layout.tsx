import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AppLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        // 🚨 No user = redirect to login
        router.replace("/(auth)/login");
      } else {
        setLoading(false);
      }

      // ✅ Listen for auth changes (logout, etc.)
      const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!session) {
          router.replace("/(auth)/login");
        }
      });

      return () => {
        subscription.subscription.unsubscribe();
      };
    }

    checkAuth();
  }, []);

  if (loading) return null; // Prevents flicker during check

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Your main app routes (e.g. tabs, screens, etc.) */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
