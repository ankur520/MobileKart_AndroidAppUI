import {StyleSheet, Text, View, Image} from 'react-native';
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

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

const ProductFilterScreenDouble = () => {
  // console.log( apiData.data.getAllProducts )

  return (
  
    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, backgroundColor: '#fff' }} >

    <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#ddd', borderBottomWidth: 0.5 }}  >

      <View style={{ position: 'relative', }} >

        <Image source={{ uri: "https://rukminim2.flixcart.com/image/832/832/xif0q/bed/j/y/5/-original-imagpprf9wppvhuy.jpeg?q=70" }} style={{ height: 200, width: 'auto' }} />

        <Text style={{ position: 'absolute', left: 5, top: 5, backgroundColor: 'green', color: "#fff", padding: 5, fontSize: 10 }} >BESTSELLER</Text>

        <Text style={{ position: 'absolute', right: 10, top: 10 }} ><FontAwesome name="heart" size={20} color="#fff" /> </Text>
      </View>


      <View style={{ marginTop: 10, paddingHorizontal: 10 }} >

        <Text
          numberOfLines={1}
          style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
          APPLE iPhone 14 Pro Max (Gold, 1 TB)
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 10,
            color: '#36454F',
            fontWeight: '400',
            marginTop: 5,
          }}>
          Gold 1TB , 16 GB RAM, M1 chip{' '}
        </Text>

        <View style={[styles.dFlex, { marginTop: 10 }]}>
          <Text
            style={{ fontSize: 12, color: '#228b22', fontWeight: '600' }}>
            16% Off
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#5e5c5c',
              fontWeight: '500',
              marginLeft: 5,
              textDecorationLine: 'line-through',
              textDecorationColor: '#5e5c5c',
            }}>
            {' '}
            &#8377;35,999{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              fontWeight: '800',
              marginLeft: 5,
            }}>
            {' '}
            &#8377;29,999{' '}
          </Text>
        </View>

        <Text
          numberOfLines={2}
          style={{
            fontSize: 10,
            color: '#36454F',
            fontWeight: '400',
            marginTop: 10,
          }}>No Cost EMI from &#8377;4,999 / month
        </Text>

        <View
          style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
          <View style={styles.dFlex}>
            <Entypo name="star" size={15} color="#228b22" />
            <Entypo name="star" size={15} color="#228b22" />
            <Entypo name="star" size={15} color="#228b22" />
            <Entypo name="star" size={15} color="#228b22" />
          </View>

          <Text
            style={{
              fontSize: 10,
              color: '#36454F',
              fontWeight: '400',
              marginLeft: 5,
            }}>
            {' '}
            (4,032){' '}
          </Text>
        </View>



        <View style={[styles.dFlex, { marginTop: 5, paddingBottom: 5 }]}>
          <Text
            style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
            Free Delivery
          </Text>
          <Text
            style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
            {' '}
            {/* 10 Offers Available{' '} */}
          </Text>
        </View>
      </View>




    </View>


  </View>

  );
};

export default ProductFilterScreenDouble;

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
  
    filterBtn: {
      borderWidth: 1, borderColor: '#ddd', borderRadius: 20, padding: 10, marginRight: 10
    }
  
  
  })