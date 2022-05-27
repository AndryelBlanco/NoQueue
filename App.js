import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AuthContextProvider } from './src/context/authContext';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/Screens/Home/Home';
import Scanner from './src/Screens/Scanner/Scanner';
import Stores from './src/Screens/Stores/Stores';
import Profile from './src/Screens/Profile/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch(route.name){
          case 'Lojas':
            iconName = 'map-marker-outline'
            break;
          case 'Scanner':
            iconName = 'qrcode-scan'
            break;
          case 'Perfil':
            iconName = 'account'
            break;
        }
          // You can return any component that you like here! 
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#0057FF',
        tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen name="Lojas" component={Stores} />
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <AuthContextProvider>    
        <NavigationContainer>
          <MyTabs />
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