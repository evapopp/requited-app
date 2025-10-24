import { StyleSheet } from "react-native";

export default function useGlobalStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    authContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
    signUpContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 26,
      fontWeight: "700",
      marginBottom: 16,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      color: "#555",
      marginBottom: 40,
    },
    buttonContainer: {
      width: "80%",
      marginBottom: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
    },
  });
}
