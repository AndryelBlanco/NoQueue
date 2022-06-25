import React from 'react';
import Stores from '../Screens/Stores/Stores';
import Profile from '../Screens/Profile/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScannerPage from '../Screens/Scanner/ScannerPage';
import ProductCheckout from '../Screens/Product/ProductCheckout';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
 return (
  <Stack.Navigator>
    <Stack.Screen name="Minha Conta" component={Profile} />
    <Stack.Screen name="Lojas" component={Stores} />
    <Stack.Screen name="Scanner" component={ScannerPage} />
    <Stack.Screen name="Checkout" component={ProductCheckout} options={{ headerShown: false }}/>
  </Stack.Navigator>
 );
};

export default StackNavigator;