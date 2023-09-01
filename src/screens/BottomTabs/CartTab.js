import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState, useEffect} from 'react';
import {windowWidth} from '../../utils/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {Divider} from 'react-native-paper';

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
import CartProduct from '../../components/CartTab/CartProducts';
import ProductCarousel from '../../components/CartTab/ProductCarousel';

import {useSelector, useDispatch } from "react-redux"

import {fetchCartByUserId} from "../../Redux/slice/CartSlice"

import { backendApis } from '../../utils/APIS';



const CartTabs = () => {

  const dispatch = useDispatch()

  const getCartFromRedux = useSelector( state => state.carts )

  // console.log(getCartFromRedux.data.cartFullArray)

  useEffect(() => {
    
    dispatch( fetchCartByUserId() )

  }, [])
  

  // console.log(backendApis.userApi.fetch_cart_byUserIdByUserId+"1/")

  return (
    <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
      <View style={styles.rootCss}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
          }}>
          My Cart
        </Text>
      </View>

      <ScrollView   showsVerticalScrollIndicator={false}>
        {/* ADDRESS BOX */}
        <View style={[styles.dFlexBetween, styles.rootCss]}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 15}}>
            {' '}
            From Saved Addresses{' '}
          </Text>

          <Button
            style={{borderWidth: 1, borderColor: '#ddd', borderRadius: 5}}>
            {' '}
            Enter Devivery Pincode{' '}
          </Button>
        </View>

        {/* Cart ITEM */}

        <CartProduct apiData={getCartFromRedux} />

        {/* Cart ITEM */}

        {/* Price details  */}

        <View style={[styles.rootCss, {marginTop: 10, elevation: 3}]}>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              fontSize: 15,
              paddingBottom: 10,
            }}>
            Price Details
          </Text>

          <View style={[styles.dFlexBetween, {paddingVertical: 5}]}>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>
              Price (1 item)
            </Text>
            <Text style={{color: 'black', fontWeight: '400'}}>
              &#8377;1,07,997{' '}
            </Text>
          </View>

          <View
            style={[styles.dFlexBetween, {paddingVertical: 5, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '400'}}>Discount </Text>
            <Text style={{color: '#228b22', fontWeight: '400'}}>
              &#8377;-12,000{' '}
            </Text>
          </View>

          <View
            style={[styles.dFlexBetween, {paddingVertical: 5, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '400'}}>
              Delivery Charges{' '}
            </Text>
            <Text style={{color: '#228b22', fontWeight: '400'}}>
              Free Delivery{' '}
            </Text>
          </View>

          <Divider />

          <View
            style={[styles.dFlexBetween, {paddingVertical: 15, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              Total Amount{' '}
            </Text>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              &#8377;89,080{' '}
            </Text>
          </View>

          <Divider />

          <Text
            style={{
              color: '#228b22',
              fontWeight: '400',
              fontSize: 15,
              marginTop: 10,
            }}>
            You will save &#8377;18,000 on this order
          </Text>
        </View>

        {/* PRODUCTS SLIDER */}
        <View style={[styles.rootCss, {marginTop: 10, elevation: 5}]}>
          <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
            Suggested For You
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: 'black',
              fontWeight: '400',
              marginTop: 5,
            }}>
            Based On Your Activity
          </Text>

          {/* PRODUCTS SLIDER */}
          <ProductCarousel apiData={getCartFromRedux}  />
          
        </View>

        {/* Footer AREA */}

        <View
          style={[
            styles.dFlex,
            {paddingVertical: 10, justifyContent: 'center'},
          ]}>
          <MaterialIcons name="verified-user" size={30} color="#5e5c5c" />

          <View>
            <Text
              style={{
                marginLeft: 15,
                color: '#5e5c5c',
                fontSize: 12,
                fontWeight: '500',
              }}>
              Safe and secure payments. Easy{' '}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                color: '#5e5c5c',
                fontSize: 12,
                fontWeight: '500',
              }}>
              returns 100% Authentic products{' '}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.rootCss,
            styles.dFlexBetween,
            {marginTop: 10, elevation: 3, paddingVertical: 15},
          ]}>
          <View>
            <Text
              style={{
                fontSize: 13,
                color: '#5e5c5c',
                fontWeight: '400',
                textDecorationLine: 'line-through',
                textDecorationColor: '#5e5c5c',
              }}>
              {' '}
              &#8377;35,999{' '}
            </Text>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              {' '}
              &#8377;35,999{' '}
            </Text>
          </View>

          <View>
            <Button
              style={{
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 5,
                backgroundColor: 'orange',
                paddingHorizontal: 35,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                {' '}
                Place Order{' '}
              </Text>
            </Button>
          </View>
        </View>

        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default CartTabs;

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
