import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

let ScreenHeight = Dimensions.get("window").height;


const Splash = ({ navigation }) => {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Language')
    }, 1000);

  }, [])


  // console.log()

  // const { navigate } = props.navigation;
  // const navigation = useNavigation();

  return (

    <View style={styles.root} >

      <Text style={styles.logo} >MobileKart</Text>

    </View>

  )
}


export default Splash

const styles = StyleSheet.create({

  root: {
    backgroundColor: '#2873F0',
    height: ScreenHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },


  logo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',



  }
})