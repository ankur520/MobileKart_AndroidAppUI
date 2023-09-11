import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useContext} from 'react';
import {backendApis} from '../../utils/APIS';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

import {updateCartQtyByUserIdAsync} from '../../Redux/slice/CartSlice';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartByUserIdAsync} from '../../Redux/slice/CartSlice';

const CartQty = ({qty, cartId, maxQty, userId}) => {
  const dispatch = useDispatch();

  const getCartFromRedux = useSelector(state => state.carts);

  // console.log( "qty - " ,  getCartFromRedux)

  const updateCartQty = async (currQty, maxQty, cartId, slugName) => {
    if (currQty < maxQty) {
      if (slugName === 'incremented') {
        dispatch(
          updateCartQtyByUserIdAsync({cartId: cartId, slugName: 'incremented'}),
        );
      }

      if (slugName === 'decremented') {
        dispatch(
          updateCartQtyByUserIdAsync({cartId: cartId, slugName: 'decremented'}),
        );
      }

      dispatch(fetchCartByUserIdAsync(userId));
    } else {
      Alert.alert("You can't add more than ", maxQty);
    }
  };

  return (
    <View
      style={[
        styles.dFlex,
        {borderWidth: 1, borderColor: '#ddd', marginTop: 5},
      ]}>
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: '#ddd', paddingHorizontal: 5}}
        onPress={() => updateCartQty(qty, maxQty, cartId, 'incremented')}>
        <View>
          <Entypo name="plus" size={20} color="#5e5c5c" />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
          {' '}
          {qty}{' '}
        </Text>
      </View>

      <TouchableOpacity
        style={{borderWidth: 1, borderColor: '#ddd', paddingHorizontal: 5}}
        onPress={() => updateCartQty(qty, maxQty, cartId, 'decremented')}>
        <View>
          <Entypo name="minus" size={20} color="#5e5c5c" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartQty;

const styles = StyleSheet.create({
  dFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
