import {StyleSheet, Text, View} from 'react-native';
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

const Card = props => {
  return (
    <>
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
              {props.name}
            </Text>
          </View>
        </View>

        {/* <View > <View>  <FontAwesome name="language" size={20} color="blue" />  </View>   <Text style={{ color: "#4A4A4A" ,  fontWeight: '500'   }} > Log In to get exclusive offers </Text> </View> */}

        <Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </Text>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({});
