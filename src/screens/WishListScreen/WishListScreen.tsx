import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
// import {Button} from 'react-native-paper';

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

import {
  fetchWishListAsync,
  removeItemFromWishListAsync,
} from '../../Redux/slice/WishListSlice';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

// other imports
import {windowWidth} from '../../utils/Dimensions';
import OrdersCard from '../../components/OrdersCard';
//   OrdersScreen
import {useSelector, useDispatch} from 'react-redux';
import ErrorAndLoading from '../../components/ErrorAndLoader';

const WishListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const loggedDataContext = useContext(IsUserLoggedContext);
  const getWishListFromRedux = useSelector(state => state.wishList);
  let wishListLength = 0;

  // console.log(getWishListFromRedux)

  if (getWishListFromRedux.data.wishlistData !== undefined) {
    wishListLength = Object.keys(getWishListFromRedux.data.wishlistData).length;
  }

  useEffect(() => {
    if (loggedDataContext.isUserLoggedIn) {
      // console.log(loggedDataContext.userInfo.id)
      dispatch(fetchWishListAsync(loggedDataContext.userInfo.id));
    }
  }, []);

  const alert = msg => {
    Alert.alert(msg);
  };

  return (
    <>
      {/* HEADER  */}
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
            My WishList
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
          {/* <OrdersCard /> */}

          {getWishListFromRedux.isLoader === false ? (
            wishListLength === 0 ? (
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontWeight: 600,
                  textAlign: 'center',
                }}>
                Products Not Available
              </Text>
            ) : (
              ''
            )
          ) : (
            <ErrorAndLoading
              isError={getWishListFromRedux.isError}
              isLoader={getWishListFromRedux.isLoader}
            />
          )}

          <FlatList
            data={getWishListFromRedux.data.wishlistData}
            scrollEnabled={false}
            renderItem={({item}) => {
              // console.log(item)

              return (
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
                          uri: `${item.productId.image1}`,
                        }}
                        style={{width: 120, height: 110, objectFit: 'contain'}}
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
                        {formatProductName(item.productId.name)}
                      </Text>

                      <Text
                        numberOfLines={4}
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 2,
                        }}>
                        {item.productId.subCategoryId.catId.cat_name}
                        {'-'}
                        {item.productId.subCategoryId.sub_cat_name}
                      </Text>

                      <View style={[styles.dFlexBetween, {marginTop: 10}]}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          {' '}
                          &#8377;{' '}
                          {calculatePrice(
                            item.productId.mrp,
                            item.productId.discountPercent,
                          )}
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'blue',
                            fontWeight: '400',
                          }}>
                          {item.date}
                        </Text>
                      </View>

                      <View style={{marginTop: 10}}>
                        <Button
                          onPress={() =>
                            dispatch(
                              removeItemFromWishListAsync({
                                productId: item.productId.id,
                                userId: loggedDataContext.userInfo.id,
                                alert: alert,
                              }),
                            )
                          }
                          title="Remove "
                          color="red"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default WishListScreen;

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
