import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// bottom tab links
import HomeTab from './screens/BottomTabs/HomeTab';
import CategoriesTabs from './screens/BottomTabs/CategoriesTab';
import NotificationsTabs from './screens/BottomTabs/NotificationsTab';
import AccountTabs from './screens/BottomTabs/AccountTab';
import CartTabs from './screens/BottomTabs/CartTab';
import AllScreen from './screens/AllScreen';

// icons
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Bottom.Navigator initialRouteName="Home">
      <Bottom.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarLabel: 'HomeTab',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="CategoriesTab"
        component={CategoriesTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'CategoriesTab',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="circle-o" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="NotificationsTab"
        component={NotificationsTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'NotificationsTab',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="AccountTab"
        component={AccountTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'AccountTab',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="CartTab"
        component={CartTabs}
        options={{
          headerShown: false,
          tabBarLabel: 'CartTab',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="AllPagesTab"
        component={AllScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'AllPagesTab',
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
