import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import  { supabase } from "../../lib/supabase"

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert("Login error", error.message);
    else Alert.alert("Success", "You are logged in!");
  }

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert("Signup error", error.message);
    else Alert.alert("Check your email for confirmation!");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        autoCapitalize="none"
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />

      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}
