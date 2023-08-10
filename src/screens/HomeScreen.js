import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// bottom tab links
import HomeTab from './BottomTabs/HomeTab';
import CategoriesTabs from './BottomTabs/CategoriesTab';
import NotificationsTabs from './BottomTabs/NotificationsTab';
import AccountTabs from './BottomTabs/AccountTab';
import CartTabs from './BottomTabs/CartTab';

// icons
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AllScreen from './AllScreen';
import Foundation from 'react-native-vector-icons/Foundation';

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Bottom.Navigator initialRouteName="Home">
      <Bottom.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Categories"
        component={CategoriesTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="circle-o" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Notifications"
        component={NotificationsTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Account"
        component={AccountTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Cart"
        component={CartTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="All Pages"
        component={AllScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'All Pages',
          tabBarIcon: ({color, size}) => (
            <Foundation name="page" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
