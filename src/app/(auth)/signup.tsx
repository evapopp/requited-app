import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { supabase } from "../../lib/supabase";
import { useRouter } from "expo-router";
import useGlobalStyles from "../../styles/UseGlobalStyles";

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const globalStyles = useGlobalStyles()

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Missing info", "Please enter both email and password.")
      return
    }

    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      Alert.alert("Signup failed", error.message)
    } else {
      Alert.alert(
        "Check your email",
        "A confirmation link has been sent. Please verify your email to continue."
      )
      router.replace("/(auth)/login")
    }
  }

  return (
    <View style={globalStyles.signUpContainer}>
      <Text style={globalStyles.title}>Create an Account</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title={loading ? "Signing up..." : "Sign Up"}
        onPress={handleSignup}
        disabled={loading}
      />

      <View style={{ marginTop: 20 }}>
        <Text
          onPress={() => router.push("/(auth)/login")}
          style={{ color: "#007AFF", textAlign: "center" }}
        >
          Already have an account? Log in
        </Text>
      </View>
    </View>
  )
}

