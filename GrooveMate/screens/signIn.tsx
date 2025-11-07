import React , { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


export default function Signin({ navigation }: any) {
   const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      
      const handleSignIn = () => {
        console.log('Username:', username);
        console.log('Password:', password);
      };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In to GROOVEMATE</Text>
      
     

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ddd"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ddd"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

       <TouchableOpacity
        style={styles.blockButton}
        activeOpacity={0.8}
        onPress={handleSignIn}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>



      <TouchableOpacity
      style={styles.blockButton}
      activeOpacity={0.8}
      onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b093bf',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: '700',
    color: '#fff',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  blockButton: {
    width: '100%',
    backgroundColor: '#8c3ab2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
});

