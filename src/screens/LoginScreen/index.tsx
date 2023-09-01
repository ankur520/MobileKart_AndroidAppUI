import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';


let ScreenHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {

  // console.log(ScreenHeight)

  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');



  return (

    <View style={styles.root} >

      <View style={styles.header}  >

        <Text
          style={styles.header_One}
          onPress={() => navigation.navigate('WelcomeScreen')}>
          <Entypo name="cross" size={30} color="#fff" />
        </Text>
        <Text style={styles.header_Two}>Login</Text>

      </View>

      <View style={{ marginTop: -200, paddingHorizontal: 15 }} >

        <View >

          <View style={styles.section}   >

            <View style={styles.textBox}  >
              <Text style={styles.textBox_One}  > Login for the best Experience </Text>
         
            </View>

            <View style={styles.inputBox} >

              <TextInput
                mode="outlined"
                outlineColor="#06388a"
                textColor="black"
                label="Your Email Address"
                value={email}
                onChangeText={email => setemail(email)}
                style={{ marginBottom: 10 }}
              />

              <TextInput
                mode="outlined"
                outlineColor="#06388a"
                textColor="black"
                label="Your Password"
                value={password}
                onChangeText={password => setpassword(password)}
              />

            </View>


            <Text style={styles.terms}> By Continuing, you agree to
              <Text style={{ color: "#2873F0", fontWeight: 'bold' }} > Mobile Kart's Terms </Text>
              of Use and
              <Text style={{ color: "#2873F0", fontWeight: 'bold' }} > Privacy Policy </Text>
            </Text>

            
            <View style={{ display: "flex", flexDirection: "row", marginTop: 20 , justifyContent : "center" }} >

              <Text style={{

                fontSize: 15,
                color: '#1a1301',
                fontWeight: '600',
                marginRight: 10,
              }}>
                New User
              </Text>

              <Text onPress={() => navigation.navigate("SignUp")} style={{ fontSize: 17, marginRight: 0, color: '#2873F0', fontWeight: 'bold', textDecorationLine: "underline" }} >
                Click Here
              </Text>
            </View>

          </View>

        </View>

      </View>

      <View style={styles.buttonBox} >

        <Button
          style={{ borderRadius: 0 }}
          dark={true}
          buttonColor='#06388a'
          textColor='#fff'

          onPress={() => console.log('Pressed')}>
          Login
        </Button>

      </View>



    </View>



  )
}

export default LoginScreen

const styles = StyleSheet.create({

  root: {
    backgroundColor: '#fff',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    height: ScreenHeight - 23,
  },

  header: {
    backgroundColor: "#2873F0",
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },

  header_One: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    marginRight: 50,
  },

  header_Two: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',

  },

  section: {



  },

  textBox: {
    marginTop: 40,

  },

  textBox_One: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',


  },

  textBox_Two: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '400',
    color: '#140f01',
  },

  inputBox: {
    marginTop: 20,
  },

  terms: {
    marginTop: 40,
    fontSize: 13,
    color: '#1a1301',
    fontWeight: '600',

  },

  buttonBox: {

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    //  backgroundColor: 'red',

    // shadowColor: 'orange',
    // shadowOffset: {width: -150, height: -100},
    // shadowOpacity: 0.5,




  }


})


