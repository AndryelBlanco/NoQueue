import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home/Home';
import Scanner from './src/Screens/Scanner/Scanner';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Scanner} />
    </Tab.Navigator>
  );
}

export default function App() {
return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
