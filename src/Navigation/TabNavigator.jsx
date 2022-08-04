import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../Screens/Login/Login';
import ProductCheckout from '../Screens/Product/ProductCheckout';
import Profile from '../Screens/Profile/Profile';
import ScannerPage from '../Screens/Scanner/ScannerPage';
import Stores from '../Screens/Stores/Stores';
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator();
const tabOptions = { headerShown: false }

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
      tabBarHideOnKeyboard: true,  
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch(route.name){
          case 'Lojas':
            iconName = 'map-marker-outline'
            break;
          case 'Scanner':
            iconName = 'qrcode-scan'
            break;
          case 'Minha Conta':
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
      <Tab.Screen name="Lojas" options={tabOptions} component={Login} />
      <Tab.Screen name="Scanner" options={tabOptions}  component={ScannerPage} />
      <Tab.Screen name="Minha Conta" options={tabOptions}  component={Profile} />
      <Tab.Screen name="Checkout" component={ProductCheckout} 
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator