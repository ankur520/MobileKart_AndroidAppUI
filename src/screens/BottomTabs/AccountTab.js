import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
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

import IsUserLoggedContext from '../../context/isLoggedInContext';
import Card from '../../components/AccountTab/Card';

const AccountTabs = ({navigation}) => {
  const loggedDataContext = useContext(IsUserLoggedContext);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      console.log(' logged out ');
      navigation.navigate('HomeTab');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // logout();
  }, []);
  return (
    <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingHorizontal: 20,
          elevation: 3,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Account
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome name="user-circle-o" size={30} color="blue" />
              <Text
                style={{
                  color: '#4A4A4A',
                  fontWeight: '500',
                  marginLeft: 10,
                  fontSize: 15,
                }}>
                {loggedDataContext.isUserLoggedIn
                  ? loggedDataContext.userInfo.email
                  : 'Log In to get exclusive offers'}
              </Text>
            </View>
          </View>

          <Text style={{color: 'red'}}>
            {loggedDataContext.isUserLoggedIn ? (
              <Button
                onPress={() => navigation.navigate('ProfileScreen')}
                title="View Profile"
                color="#2448bf"
                style={{width: 100}}
              />
            ) : (
              <Button
                onPress={() => navigation.navigate('Login')}
                title="Log In"
                color="#2448bf"
                style={{width: 100}}
              />
            )}
          </Text>
        </View>
      </View>

      {loggedDataContext.isUserLoggedIn ? (
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
            Account Details
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
                <FontAwesome6
                  name="heart-circle-plus"
                  size={20}
                  color="#2448bf"
                />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}
                  onPress={() => navigation.navigate('WishListScreen')}>
                  WishList
                </Text>
              </View>
            </View>
            <Text>
              <Entypo
                name="chevron-small-right"
                onPress={() => navigation.navigate('WishListScreen')}
                size={20}
                color="black"
              />
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
                <Feather name="box" size={20} color="#2448bf" />
                <Text
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}
                  onPress={() => navigation.navigate('OrdersScreen')}>
                  Orders
                </Text>
              </View>
            </View>
            <Text>
              <Entypo
                onPress={() => navigation.navigate('OrdersScreen')}
                name="chevron-small-right"
                size={20}
                color="black"
              />
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
                <Entypo name="location" size={20} color="#2448bf" />
                <Text
                  onPress={() => navigation.navigate('AllAddressScreen')}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  All Addresses
                </Text>
              </View>
            </View>
            <Text>
              <Entypo
                onPress={() => navigation.navigate('AllAddressScreen')}
                name="chevron-small-right"
                size={20}
                color="black"
              />
            </Text>
          </View>
        </View>
      ) : (
        ''
      )}

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
                Terms, Policies and Licenses
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
              <AntDesign name="questioncircleo" size={20} color="#2448bf" />
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

      {/* Logout Btn  */}
      {loggedDataContext.isUserLoggedIn ? (
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 20,
            paddingHorizontal: 20,
            elevation: 3,
          }}>
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
                  onPress={() => logout()}
                  style={{
                    color: '#4A4A4A',
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  Logout
                </Text>
              </View>
            </View>

            <Text onPress={() => logout()}>
              <Entypo name="chevron-small-right" size={20} color="black" />
            </Text>
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default AccountTabs;

const styles = StyleSheet.create({});
