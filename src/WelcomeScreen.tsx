import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import {TabRouter} from '@react-navigation/native';
import SideBar from './screens/DrawerScreen/SideBar';

const Drawer = createDrawerNavigator();

const WelcomeScreen = () => {
  return (
    <>
      <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </>

    // Categories
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
