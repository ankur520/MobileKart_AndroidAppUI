import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {windowWidth} from '../../utils/Dimensions';
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

import ErrorAndLoading from '../ErrorAndLoading';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

const CartProduct = ({apiData}) => {
  // console.log("apiData" , apiData.data.cartFullArray )
  // orderPlacedStatus
  return (
    <>
     
     <ErrorAndLoading isError={apiData.isError} isLoader={apiData.isLoader} />

      <FlatList
        data={apiData.data.cartFullArray}
        vertical
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({item}) => {
          if (item.orderPlacedStatus === false) {
            return (
              <View
                style={[
                  styles.rootCss,
                  {marginTop: 10, elevation: 3, width: windowWidth},
                ]}
                key={item.id}>
                <View style={[styles.dFlex]}>
                  <View>
                    <Image
                      source={{
                        uri: `${item.productId.image1}`,
                      }}
                      style={{width: 100, height: 100, objectFit: 'contain'}}
                      resizeMode="contain"
                    />

                    <View>
                      <Text> Qty - {item.qty} </Text>
                    </View>
                  </View>

                  <View style={{marginLeft: 5}}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 13,
                        color: '#36454F',
                        fontWeight: '600',
                      }}>
                      {formatProductName(item.productId.name)}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 10,
                        color: '#36454F',
                        fontWeight: '400',
                        marginTop: 5,
                      }}>
                      {item.productId.subCategoryId.catId.cat_name}{' '}
                      {item.productId.subCategoryId.sub_cat_name}
                    </Text>

                    <View
                      style={[
                        styles.dFlex,
                        {marginTop: 10, alignItems: 'center'},
                      ]}>
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

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#228b22',
                          fontWeight: '600',
                        }}>
                        {item.productId.discountPercent}% Off
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
                        &#8377;{item.productId.mrp}{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: '500',
                          marginLeft: 5,
                        }}>
                        {' '}
                        &#8377;{' '}
                        {calculatePrice(
                          item.productId.mrp,
                          item.productId.discountPercent,
                        )}
                      </Text>
                    </View>

                    <View style={[styles.dFlex, {marginTop: 5}]}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#228b22',
                          fontWeight: '500',
                        }}>
                        {' '}
                        3 Offers Applied{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#228b22',
                          fontWeight: '500',
                        }}>
                        {' '}
                        10 Offers Available{' '}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.dFlex, {marginTop: 5}]}>
                  <Text
                    style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
                    {' '}
                    Delivery by Thu Aug 3{' '}
                  </Text>
                  <Text
                    style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
                    {' '}
                    {'|'}{' '}
                  </Text>
                  <Text
                    style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
                    {/* item.productId.shippingStatus === "FreeShipping" || */}
                    {/* {  item.productId.shippingStatus === 0 ? "Free Shipping" : ""  } */}{' '}
                    Delivery{' '}
                  </Text>
                  <Text
                    style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
                    {calculateDelivery(
                      item.productId.shippingStatus,
                      item.productId.shippingAmount,
                    )}{' '}
                    &#8377;
                  </Text>
                </View>

                <View
                  style={[
                    {
                      borderTopWidth: 0.5,
                      borderTopColor: '#ddd',
                      marginTop: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    },
                  ]}>
                  <Button>
                    {' '}
                    <AntDesign name="delete" size={15} color="#28282B" />{' '}
                    <Text style={{color: '#28282B', fontSize: 15}}>Remove</Text>{' '}
                  </Button>
                  <Button>
                    {' '}
                    <MaterialIcons
                      name="save-alt"
                      size={15}
                      color="#28282B"
                    />{' '}
                    <Text style={{color: '#28282B', fontSize: 15}}>
                      Save for later
                    </Text>{' '}
                  </Button>
                  <Button>
                    {' '}
                    <MaterialCommunityIcons
                      name="lightning-bolt-outline"
                      size={15}
                      color="#28282B"
                    />{' '}
                    <Text style={{color: '#28282B', fontSize: 15}}>
                      Buy this now
                    </Text>{' '}
                  </Button>
                </View>
              </View>
            );
          }
        }}
      />
    </>
  );
};

export default CartProduct;

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
