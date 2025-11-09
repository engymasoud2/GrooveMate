import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import home from './screens/home';
import signin from './screens/signIn';
import mainPage from './screens/mainPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="signIn" component={signin} />
        <Stack.Screen name="mainPage" component={mainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
