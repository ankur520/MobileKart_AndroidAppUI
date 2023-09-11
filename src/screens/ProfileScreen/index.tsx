import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {windowWidth} from '../../utils/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// import {userLoggedData}  from "../../../App"

import {Button} from 'react-native-paper';

import IsUserLoggedContext from '../../context/isLoggedInContext';

const ProfileScreen = ({navigation}) => {
  const loggedDataContext = useContext(IsUserLoggedContext);

  useEffect(() => {
    if (!loggedDataContext.isUserLoggedIn) {
      navigation.navigate('Login');
    }
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      console.log(' logged out ');
      navigation.navigate('WelcomeScreen');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingHorizontal: 20,
            elevation: 3,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              onPress={() => navigation.navigate('WelcomeScreen')}
              style={{marginRight: 10}}
              name="arrowleft"
              size={30}
              color="#343434"
            />

            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Hey!{' '}
              {loggedDataContext.isUserLoggedIn
                ? loggedDataContext.userInfo.email
                : ''}
            </Text>
          </View>

          <View
            style={[
              styles.dFlexBetween,
              {marginTop: 15, justifyContent: 'space-between'},
            ]}>
            <View
              style={[
                ,
                styles.dFlex,
                {
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  borderColor: '#ddd',
                  borderRadius: 5,
                },
              ]}>
              <Feather name="box" size={25} color="#2448bf" />
              <Button>Orders</Button>
            </View>

            <View
              style={[
                styles.dFlex,
                {
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  borderColor: '#ddd',
                  borderRadius: 5,
                },
              ]}>
              <AntDesign name="hearto" size={25} color="#2448bf" />
              <Button>Wishlist</Button>
            </View>
          </View>

          <View
            style={[
              styles.dFlexBetween,
              {marginVertical: 15, justifyContent: 'space-between'},
            ]}>
            <View
              style={[
                ,
                styles.dFlex,
                {
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  borderColor: '#ddd',
                  borderRadius: 5,
                },
              ]}>
              <AntDesign name="gift" size={25} color="#2448bf" />
              <Button>Orders</Button>
            </View>

            <View
              style={[
                styles.dFlex,
                {
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  borderColor: '#ddd',
                  borderRadius: 5,
                },
              ]}>
              <AntDesign name="customerservice" size={25} color="#2448bf" />
              <Button>Wishlist</Button>
            </View>
          </View>
        </View>

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
            Account Settings
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
                <FontAwesome name="language" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Edit Profile
                </Text>
              </View>
            </View>

            {/* <View > <View>  <FontAwesome name="language" size={20} color="blue" />  </View>   <Text style={{ color: "#4A4A4A" ,  fontWeight: '500'   }} > Log In to get exclusive offers </Text> </View> */}

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#2448bf"
                />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 15,
                  }}>
                  Saved Card & Wallet
                </Text>
              </View>
            </View>

            {/* <View > <View>  <FontAwesome name="language" size={20} color="blue" />  </View>   <Text style={{ color: "#4A4A4A" ,  fontWeight: '500'   }} > Log In to get exclusive offers </Text> </View> */}

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntDesign name="customerservice" size={20} color="blue" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 15,
                  }}>
                  Saved Address
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="#2448bf" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntDesign name="customerservice" size={20} color="blue" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 15,
                  }}>
                  Select Language
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="#2448bf" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntDesign name="customerservice" size={20} color="blue" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 15,
                  }}>
                  Notification Settings
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="#2448bf" />
            </Text>
          </View>
        </View>

        {/*   SECOND SECTION  */}

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
            My Activity
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingBottom: 20,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <FontAwesome5 name="store" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Reviews
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingBottom: 20,
              alignItems: 'baseline',
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <FontAwesome5 name="store" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Question & Answers
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>
        </View>

        {/* thIRD sECTION  */}

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
            Earn with Mobilekart
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
                <AntDesign name="copy1" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Sell On MobileKart
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>
        </View>

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
            Feedback & Information
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
                <AntDesign name="copy1" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Terms, Policies and Licences
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
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
                <AntDesign name="copy1" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Browse FAQs
                </Text>
              </View>
            </View>

            <Text>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>
        </View>
      </View>

      <View style={{margin: 20, paddingHorizontal: 10}}>
        <View style={{backgroundColor: '#fff', elevation: 5}}>
          <Button style={{padding: 0}} onPress={() => logout()}>
            <Text
              style={{
                color: '#2448bf',
                fontWeight: '800',
                fontSize: 20,
                // marginLeft: 10,
              }}>
              Logout
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootCss: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

  dFlexBetween: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
