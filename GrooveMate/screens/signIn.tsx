import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function SignIn({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignIn = async () => {
    setErrorMessage("");
    try {
      const response = await fetch("http://10.0.0.86:8000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.detail || "Invalid credentials. Try Again.");
        return;
      }

      //const data = await response.json();
      //Alert.alert("Success", data.message);
      navigation.navigate("mainPage");
    } catch (error: any) {
      setErrorMessage(error.message || "Something Went Wrong. Try Again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In to GrooveMate</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.blockButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cornerButton}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('mainPage')}>
        <Text style={styles.buttonText}>Tester Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b093bfff",
    paddingHorizontal: 20,
  },
  error: {
    color: "#c12b2bff",
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  blockButton: {
    width: "100%",
    backgroundColor: "#8c3ab2ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  cornerButton: {
    width: "30%",
    backgroundColor: "#b0b23aff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backText: {
    marginTop: 20,
    color: "#fff",
    fontSize: 16,
  },
});
