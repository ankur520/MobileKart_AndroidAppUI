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

const ProductFilterScreenSingle = ({apiData}) => {
  // console.log( apiData.data.getAllProducts )

  return (
 <>
 
 {apiData.data.getAllProducts.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.rootCss,
                  { marginTop: 0, borderBottomWidth: 0.5, borderBottomColor: '#ddd' },
                ]}>
                <View style={[styles.dFlex]}>
                  <View>
                    <Image
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
                      }}
                      style={{ width: 100, height: 130, objectFit: 'contain' }}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={{ marginLeft: 15 }}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
                      {item.name.substring(0, 35) + '...'}
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

                    <View style={[styles.dFlex, { marginTop: 10 }]}>
                      <Text
                        style={{ fontSize: 18, color: '#228b22', fontWeight: '600' }}>
                        {item.discountPercent}% Off
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#5e5c5c',
                          fontWeight: '400',
                          marginLeft: 5,
                          textDecorationLine: 'line-through',
                          textDecorationColor: '#5e5c5c',
                        }}>
                        {' '}
                        &#8377;{item.mrp}{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: '500',
                          marginLeft: 5,
                        }}>
                        {' '}
                        &#8377;{calculatePrice(item.mrp, item.discountPercent)}
                      </Text>
                    </View>

                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 13,
                        color: '#36454F',
                        fontWeight: '400',
                        marginTop: 5,
                      }}>
                      No Cost EMI from &#8377;4,999 / month
                    </Text>

                    <View style={[styles.dFlex, { marginTop: 5 }]}>
                      <Text
                        style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                        3 Offers Applied
                      </Text>
                      <Text
                        style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                        {' '}
                        10 Offers Available{' '}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.dFlex, { marginTop: 5 }]}>
                  <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    Delivery by Thu Aug 3{' '}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {'|'}{' '}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                    {' '}
                    {/* {calculateDelivery(item.shippingStatus, item.shippingAmount )} */}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {calculateDelivery(item.shippingStatus, item.shippingAmount)}
                    &#8377;
                  </Text>
                </View>

                <View style={[{ marginTop: 10 }, styles.dFlex]}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#9f9f9f',
                      fontWeight: '500',
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderRadius: 4,
                      padding: 5,
                      width: 140,
                      marginRight: 10,
                    }}>
                    8 GB RAM {'|'} 128 GB Storage
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#9f9f9f',
                      fontWeight: '500',
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderRadius: 4,
                      padding: 5,
                      width: 140,
                    }}>
                    8 GB RAM {'|'} 128 GB Storage
                  </Text>
                </View>
              </View>
            );
          })}

 
 </>

  );
};

export default ProductFilterScreenSingle;

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