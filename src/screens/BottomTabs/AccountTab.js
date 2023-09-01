import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/Dimensions';

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

const AccountTabs = () => {
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
                Log In to get exclusive offers
              </Text>
            </View>
          </View>

          <Text style={{color: 'red'}}>
            <Button title="Log In" color="#2448bf" style={{width: 100}} />
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
                Log In to get exclusive offers
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
                Notification Settings
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
                Help Center
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
          Earn with Flipkart
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
                Sell On Flipkart
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
    </View>
  );
};

export default AccountTabs;

const styles = StyleSheet.create({});
