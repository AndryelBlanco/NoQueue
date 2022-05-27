import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AuthContextProvider } from './src/context/authContext';
import { TouchableOpacity } from 'react-native';

import Home from './src/Screens/Home/Home';
import Scanner from './src/Screens/Scanner/Scanner';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <AuthContextProvider>    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Scanner} />
      </Tab.Navigator>
    </AuthContextProvider>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
}

   