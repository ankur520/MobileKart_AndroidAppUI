import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
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

import {Link} from '@react-navigation/native';

import ErrorAndLoading from '../ErrorAndLoader';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

const ProductFilterScreenSingle = ({apiData}) => {
  // console.log(apiData);
  // console.log( "29 -",  apiData.data.fetchProduct[0].name )

  return (
    <>
      <ErrorAndLoading isError={apiData.isError} isLoader={apiData.isLoader} />

      {apiData.data.msg === 'SubCategoryDoesNotExist' ? (
        <Text
          style={{
            fontSize: 15,
            color: 'red',
            textAlign: 'center',
            fontWeight: '400',
            marginVertical: 20,
          }}>
          Sorry Products Not Available
        </Text>
      ) : (
        ''
      )}

      <FlatList
        data={apiData.data.getAllProducts}
        scrollEnabled={false}
        renderItem={item => {
          // console.log( "42",  item.item.id )
          return (
            <View
              key={item.item.id}
              style={[
                styles.rootCss,
                {
                  marginTop: 0,
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#ddd',
                },
              ]}>
              <View style={[styles.dFlex]}>
                <View>
                  <Image
                    source={{
                      uri: `${item.item.image1}`,
                    }}
                    style={{width: 100, height: 130, objectFit: 'contain'}}
                    resizeMode="contain"
                  />
                </View>

                <View style={{marginLeft: 15}}>
                  <Link
                    to={{
                      screen: 'ProductDetailScreen',
                      params: {
                        category: `${item.item.subCategoryId.catId.cat_name}`,
                        subCategory: `${item.item.subCategoryId.sub_cat_name}`,
                        productId: `${item.item.id}`,
                      },
                    }}
                    style={{fontSize: 13, color: '#36454F', fontWeight: '600'}}>
                    {item.item.name.substring(0, 35) + '...'}
                  </Link>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: '#36454F',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    {item.item.subCategoryId.catId.cat_name}{' '}
                    {item.item.subCategoryId.sub_cat_name}
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
                      {item.item.discountPercent}% Off
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
                      &#8377;{item.item.mrp}{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: '500',
                        marginLeft: 5,
                      }}>
                      {' '}
                      &#8377;
                      {calculatePrice(item.item.mrp, item.item.discountPercent)}
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

                  <View style={[styles.dFlex, {marginTop: 5}]}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#228b22',
                        fontWeight: '500',
                      }}>
                      3 Offers Applied
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
                  {' '}
                  {/* {calculateDelivery(item.item.shippingStatus, item.item.shippingAmount )} */}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
                  {' '}
                  {calculateDelivery(
                    item.item.shippingStatus,
                    item.item.shippingAmount,
                  )}
                  &#8377;
                </Text>
              </View>

              <View style={[{marginTop: 10}, styles.dFlex]}>
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
        }}
      />

      <View style={{marginBottom: 150}}></View>
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
});
