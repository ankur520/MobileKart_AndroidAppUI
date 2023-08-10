import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

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

const OrdersCard = () => {
  return (
    <>
      <View
        style={[
          styles.dFlexBetween,
          {
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingBottom: 10,
            marginTop: 10,
          },
        ]}>
        <View style={[styles.dFlex, {}]}>
          <View>
            <Image
              source={{
                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
              }}
              style={{width: 150, height: 110, objectFit: 'contain'}}
              resizeMode="contain"
            />
          </View>

          <View style={{marginLeft: 5}}>
            <Text
              numberOfLines={1}
              style={{fontSize: 13, color: '#36454F', fontWeight: '600'}}>
              Delivered on Jun XX XXXX
            </Text>

            <Text
              numberOfLines={4}
              style={{
                fontSize: 13,
                color: '#36454F',
                fontWeight: '600',
                marginTop: 10,
              }}>
              Iphone 13Pro max 32 GB
            </Text>

            <View style={[styles.dFlex, {marginTop: 10, alignItems: 'center'}]}>
              <View style={styles.dFlex}>
                <Entypo name="star" size={25} color="#228b22" />
                <Entypo name="star" size={25} color="#228b22" />
                <Entypo name="star" size={25} color="#228b22" />
                <Entypo name="star" size={25} color="#228b22" />
              </View>
            </View>

            <View style={[styles.dFlex, {marginTop: 10}]}>
              <Text style={{fontSize: 18, color: 'blue', fontWeight: '400'}}>
                Write a Review
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Entypo name="chevron-small-right" size={30} color="black" />
        </View>
      </View>
    </>
  );
};

export default OrdersCard;

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
  },
});
