import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';

let ScreenHeight = Dimensions.get("window").height;

const LoginScreen = () => {

  // console.log(ScreenHeight)

  const [text, setText] = useState("");



  return (

    <View style={styles.root} >

      <View style={styles.header}  >

        <Text style={styles.header_One}>Cross</Text>
        <Text style={styles.header_Two}>MobileKart</Text>

      </View>

      <View style={{ marginTop: -500, paddingHorizontal: 15 }} >

        <View >

          <View style={styles.section}   >

            <View style={styles.textBox}  >
              <Text style={styles.textBox_One}  > Login for the best Experience </Text>
              <Text style={styles.textBox_Two}  > Enter Your Phone No to Continue </Text>
            </View>

            <View style={styles.inputBox} >

              <TextInput
                mode="outlined"
                outlineColor="#06388a"
                textColor="black"
                label="Phone Number"
                value={text}
                onChangeText={text => setText(text)}
              />

            </View>


            <Text style={styles.terms}> By Continuing, you agree to
              <Text style={{ color: "#2873F0", fontWeight: 'bold' }} > Mobile Kart's Terms </Text>
              of Use and
              <Text style={{ color: "#2873F0", fontWeight: 'bold' }} > Privacy Policy </Text>
            </Text>

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
          Continue
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


