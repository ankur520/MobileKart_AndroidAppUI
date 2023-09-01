import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

// screen Imports
import Splash from './screens/Splash';
import LanguageScreen from './screens/LanguageScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import ProductsFilterScreen from './screens/ProductsFilterScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='SignUp'>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Language"
          component={LanguageScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductsFilterScreen"
          component={ProductsFilterScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={ SignUpScreen }
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrdersScreen"
          component={OrdersScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
