import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in Success!! MORE TO COME!!!</Text>
      <TouchableOpacity 
        style={styles.cornerButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>←Go Back</Text>
      </TouchableOpacity>
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b093bfff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
    color:  "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
})