import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AuthContextProvider } from './src/context/authContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/Screens/Home/Home';
import Stores from './src/Screens/Stores/Stores';
import Profile from './src/Screens/Profile/Profile';
import ScannerPage from './src/Screens/Scanner/ScannerPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigation/TabNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = { headerShown: false }

// const Stack = createNativeStackNavigator();

// const StackNavigator = () => {
//   return (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={Profile} />
//   </Stack.Navigator>
//   );
// }


export default function App() {
  return (
      <AuthContextProvider>    
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </AuthContextProvider>
    );
}

   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2C2C2',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
});