import { Alert, Button, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function directly

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);  // Use the function correctly
      Alert.alert("Success", "Account created successfully!");
      // Redirect to home or login after signup
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderBottomWidth: 1, marginBottom: 20, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20, padding: 8 }}
      />
      {errorMessage ? <Text style={{ color: "red" }}>{errorMessage}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
