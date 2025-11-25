import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GrooveMate!!</Text>
      <Text style={styles.title}>This is more like a details page with the project goals and details </Text>

      <TouchableOpacity
        style={styles.blockButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('signIn')}
      >
        <Text style={styles.buttonText}>SIGN IN</Text>
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
  },
  blockButton: {
    width: '100%',            // full width
    backgroundColor: '#8c3ab2ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


