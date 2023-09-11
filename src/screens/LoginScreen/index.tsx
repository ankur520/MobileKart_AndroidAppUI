import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import jwt_decode from 'jwt-decode';
import {storeData} from '../../utils/UserEncryptedStoragefunctions';

import ProgressDialog from '../../components/ProgressDialog';

let ScreenHeight = Dimensions.get('window').height;

// Formik
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

// redux
import {userLoginAsync} from '../../Redux/slice/UserLoginSlice';
import {useSelector, useDispatch} from 'react-redux';

import {LoginSchema} from '../../utils/FormikSchema';
import ErrorAndLoading from '../../components/ErrorAndLoader';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [wrongPasswordError, setwrongPasswordError] = useState('');
  const [emailIncorrect, setemailIncorrect] = useState('');

  const reduxUserLogin = useSelector(state => state.userLogin);

  const onLoginSubmitBtn = values => {
    setemailIncorrect('');

    let Eemail = values.email;
    let Ppassword = values.password;

    const redirect = msg => {
      navigation.navigate(msg);
    };

    const alert = msg => {
      Alert.alert(msg);
    };

    dispatch(
      userLoginAsync({
        email: values.email,
        password: values.password,
        alert: alert,
        redirect: redirect,
      }),
    );
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => onLoginSubmitBtn(values)}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View>
          <View style={styles.root}>
            <View style={styles.header}>
              <Text
                style={styles.header_One}
                onPress={() => navigation.navigate('WelcomeScreen')}>
                <Entypo name="cross" size={30} color="#fff" />
              </Text>
              <Text style={styles.header_Two}>Login</Text>
            </View>

            <View style={{marginTop: -200, paddingHorizontal: 15}}>
              <View>
                <View style={styles.section}>
                  <View
                    style={[
                      styles.textBox,
                      {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                      },
                    ]}>
                    <Text style={styles.textBox_One}>
                      {' '}
                      Please Login For Better Experience{' '}
                    </Text>
                    <ErrorAndLoading
                      isError={false}
                      isLoader={reduxUserLogin.isLoader}
                    />
                  </View>
                  {/* 
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',

                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 15,
                        color: 'red',
                        fontWeight: '600',
                        marginBottom: 0,
                      }}>
                      {wrongPasswordError.length > 0 ? emailIncorrect : ""}
                      {emailIncorrect.length ? emailIncorrect : ""}
                    </Text>
                  </View> */}

                  <View style={styles.inputBox}>
                    <TextInput
                      mode="outlined"
                      outlineColor="#06388a"
                      textColor="black"
                      label="Your Email Address"
                      keyboardType={'email-address'}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      style={{marginBottom: 10}}
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorTxt}> {errors.email} </Text>
                    )}

                    <TextInput
                      mode="outlined"
                      outlineColor="#06388a"
                      textColor="black"
                      label="Your Password"
                      value={values.password}
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorTxt}> {errors.password} </Text>
                    )}
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 20,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#1a1301',
                        fontWeight: '600',
                        marginRight: 10,
                      }}>
                      New User
                    </Text>

                    <Text
                      onPress={() => navigation.navigate('SignUp')}
                      style={{
                        fontSize: 17,
                        marginRight: 0,
                        color: '#2873F0',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Click Here
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.buttonBox}>
              <Button
                onPress={handleSubmit}
                style={{borderRadius: 0}}
                dark={true}
                buttonColor="#06388a"
                textColor="#fff">
                Login
              </Button>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: ScreenHeight - 23,
  },

  header: {
    backgroundColor: '#2873F0',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },

  header_One: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    marginRight: 20,
  },

  header_Two: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },

  section: {},

  textBox: {
    marginTop: 40,
  },

  textBox_One: {
    fontSize: 15,
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
    marginTop: 30,
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
  },

  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: 'gray',
    paddingHorizontal: 8,
  },

  errorTxt: {
    fontSize: 10,
    color: 'red',
    fontWeight: '500',
  },
});
