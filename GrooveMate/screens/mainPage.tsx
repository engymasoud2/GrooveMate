import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in Success!! MORE TO COME!!!</Text>
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
})