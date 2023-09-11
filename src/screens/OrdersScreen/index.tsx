import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {Button} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper';

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

// other imports
import {windowWidth} from '../../utils/Dimensions';
import OrdersCard from '../../components/OrdersCard';

import {fetchPlacedOrdersAsync} from '../../Redux/slice/PlaceOrderSlice';
import {useSelector, useDispatch} from 'react-redux/';
import ErrorAndLoading from '../../components/ErrorAndLoader';
import IsUserLoggedContext from '../../context/isLoggedInContext';
import {List} from 'react-native-paper';

//   OrdersScreen
const OrdersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loggedDataContext = useContext(IsUserLoggedContext);

  const getPlacedOrders = useSelector(state => state.placeOrder);

  // console.log(getPlacedOrders.data.getCartData)

  // for (const key in getPlacedOrders.data.getCartData) {

  //     for (const key2 in getPlacedOrders.data.getCartData[key]) {
  //        console.log("key2 - " , getPlacedOrders.data.getCartData[key][key2].id )
  //     }

  // }

  useEffect(() => {
    if (loggedDataContext.isUserLoggedIn) {
      // console.log(loggedDataContext.userInfo.id)
      dispatch(fetchPlacedOrdersAsync(loggedDataContext.userInfo.id));
    }
  }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: '#2873F0',
          height: 60,
          width: windowWidth,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          position: 'relative',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{marginRight: 10}}
            name="arrowleft"
            size={30}
            color="#fff"
          />

          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            My Orders
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Fontisto
            style={{marginRight: 10}}
            name="search"
            size={20}
            color="#fff"
          />

          <AntDesign
            name="shoppingcart"
            size={20}
            color="#fff"
            onPress={() => navigation.navigate('CartTab')}
          />
        </View>
      </View>

      {/* SCROLL VIEW STARTS  */}

      <ScrollView
        style={{backgroundColor: '#F1F2F6', width: windowWidth}}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.rootCss,
            {
              marginTop: 10,
              elevation: 3,
              width: windowWidth,
              backgroundColor: '#ffffff',
            },
          ]}>
          {/* {getPlacedOrders.isLoader === false ?
(
Object.keys(getPlacedOrders.data.getCartData).length === 0 ? <Text
style={{
color: 'red',
fontSize: 20,
fontWeight: 600,
textAlign: "center",

}}>
Products Not Available
</Text> : "")
:
(<ErrorAndLoading isError={getPlacedOrders.isError} isLoader={getPlacedOrders.isLoader} />)
}  */}

          <ErrorAndLoading
            isError={getPlacedOrders.isError}
            isLoader={getPlacedOrders.isLoader}
          />

          {/* <OrdersCard /> */}

          <FlatList
            data={getPlacedOrders.data.getCartData}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              //   console.log(' item -', index, item[0].placeOrderId.cartAmount);

              return (
                <List.AccordionGroup>
                  <List.Accordion
                    titleStyle={{color: 'black', padding: 10}}
                    title={` Order ${index + 1}- ${
                      item[0].placeOrderId.addressId.fullAddress
                    } `}
                    id={index + 1}>
                    <View
                      style={[
                        styles.dFlexBetween,
                        {
                          backgroundColor: '#ddd',
                          paddingVertical: 10,
                          paddingHorizontal: 5,
                        },
                      ]}>
                      <View style={styles.dFlexBetween}>
                        <Foundation
                          name="shopping-cart"
                          size={15}
                          color="#36454F"
                        />

                        <Text
                          style={{
                            fontSize: 13,
                            color: '#36454F',
                            fontWeight: '600',
                            marginLeft: 5,
                          }}>
                          &#8377;{item[0].placeOrderId.cartAmount}
                        </Text>
                      </View>

                      <View style={styles.dFlexBetween}>
                        <MaterialIcons
                          name="payments"
                          size={15}
                          color="#36454F"
                        />

                        <Text
                          style={{
                            fontSize: 13,
                            color: '#36454F',
                            fontWeight: '600',
                            marginLeft: 5,
                          }}>
                          {item[0].placeOrderId.paymentMode}
                        </Text>
                      </View>

                      <View style={styles.dFlexBetween}>
                        <Fontisto name="date" size={15} color="#36454F" />

                        <Text
                          style={{
                            fontSize: 13,
                            color: '#36454F',
                            fontWeight: '600',
                            marginLeft: 5,
                          }}>
                          {item[0].placeOrderId.date.substring(0, 12) + '..'}
                        </Text>
                      </View>
                    </View>

                    {item.map((nestedData, index) => {
                      return (
                        <View
                          key={index}
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
                                  uri: `${nestedData.productId.image1}`,
                                }}
                                style={{
                                  width: 120,
                                  height: 110,
                                  objectFit: 'contain',
                                }}
                                resizeMode="contain"
                              />
                            </View>

                            <View style={{marginLeft: 0}}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 13,
                                  color: '#36454F',
                                  fontWeight: '600',
                                }}>
                                {formatProductName(nestedData.productId.name)}
                              </Text>

                              <Text
                                numberOfLines={4}
                                style={{
                                  fontSize: 13,
                                  color: '#36454F',
                                  fontWeight: '600',
                                  marginTop: 5,
                                }}>
                                {
                                  nestedData.productId.subCategoryId.catId
                                    .cat_name
                                }
                                {'-'}
                                {
                                  nestedData.productId.subCategoryId
                                    .sub_cat_name
                                }
                              </Text>

                              <View
                                style={[styles.dFlexBetween, {marginTop: 10}]}>
                                <Text
                                  style={{
                                    fontSize: 18,
                                    color: 'black',
                                    fontWeight: '500',
                                  }}>
                                  {' '}
                                  &#8377;{' '}
                                  {calculatePrice(
                                    nestedData.productId.mrp,
                                    nestedData.productId.discountPercent,
                                  )}
                                </Text>

                                <Text
                                  style={{
                                    fontSize: 10,
                                    color: 'blue',
                                    fontWeight: '400',
                                  }}>
                                  Qty - {nestedData.qty}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </List.Accordion>
                </List.AccordionGroup>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default OrdersScreen;

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

  header_inputBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },

  header_searchIcon: {
    position: 'absolute',
    left: 30,
    color: '#b4b5b9',
  },

  header_searchInput: {
    width: '80%',
    paddingLeft: 40,
    paddingRight: 80,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
    height: 50,
  },

  header_voiceIcon: {
    position: 'absolute',
    right: 80,
    color: '#b4b5b9',
  },

  header_cameraIcon: {
    position: 'absolute',
    right: 45,
    color: '#b4b5b9',
  },
});
