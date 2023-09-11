import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {windowWidth} from '../utils/Dimensions';

const AllScreen = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 20,
            paddingHorizontal: 20,
            elevation: 3,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              paddingVertical: 15,
              fontWeight: '600',
            }}>
            All Screen Pages
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Foundation name="page" size={30} color="#2448bf" />

                <Text
                  onPress={() => navigation.navigate('Splash')}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  Splash Screen
                </Text>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('Splash')}>
              <Entypo name="chevron-small-right" size={30} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Foundation name="page" size={30} color="#2448bf" />

                <Text
                  onPress={() => navigation.navigate('Language')}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  Language Screen
                </Text>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('Language')}>
              <Entypo name="chevron-small-right" size={30} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Foundation name="page" size={30} color="#2448bf" />

                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  Sign In Screen
                </Text>
              </View>
            </View>

            {/* <View > <View>  <FontAwesome name="language" size={20} color="blue" />  </View>   <Text style={{ color: "#4A4A4A" ,  fontWeight: '500'   }} > Log In to get exclusive offers </Text> </View> */}

            <Text onPress={() => navigation.navigate('Login')}>
              <Entypo name="chevron-small-right" size={30} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Foundation name="page" size={30} color="#2448bf" />

                <Text
                  onPress={() => navigation.navigate('SignUp')}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  Sign Up Screen
                </Text>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('SignUp')}>
              <Entypo name="chevron-small-right" size={30} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Foundation name="page" size={30} color="#2448bf" />

                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  My Profile Screen
                </Text>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('ProfileScreen')}>
              <Entypo name="chevron-small-right" size={30} color="black" />
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AllScreen;

const styles = StyleSheet.create({});
