import {StyleSheet, Text, View, FlatList, Image, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import ErrorAndLoading from '../ErrorAndLoader';
import {backendApis} from '../../utils/APIS';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';
import {addProductInCartAsync} from '../../Redux/slice/CartSlice';
import {fetchCartByUserIdAsync} from '../../Redux/slice/CartSlice';

const ProductCarousel = ({apiData, userId}) => {
  const dispatch = useDispatch();

  const alert = msg => {
    Alert.alert(msg);
  };

  const addProductInCartOnPress = (productId, userId) => {
    if (userId !== '') {
      dispatch(
        addProductInCartAsync({
          productId: productId,
          userId: userId,
          alert: alert,
        }),
      );

      dispatch(fetchCartByUserIdAsync(userId));
    } else {
      Alert.alert('Alert', 'Please Login First');
    }
  };

  return (
    <>
      <ErrorAndLoading isError={apiData.isError} isLoader={apiData.isLoader} />

      <FlatList
        data={apiData.data.getAllProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginTop: 10,
                borderWidth: 0.5,
                borderColor: '#ddd',
                borderRadius: 5,
                paddingHorizontal: 5,
                paddingBottom: 10,
                width: 160,
                marginRight: 10,
              }}>
              <Image
                style={{width: 140, height: 140, objectFit: 'contain'}}
                resizeMode="contain"
                source={{
                  uri: `${item.image1}`,
                }}
              />

              <View style={{marginTop: 10}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '600',
                  }}>
                  {formatProductName(item.name)}
                </Text>

                <View style={[styles.dFlex, {marginTop: 5}]}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    &#8377;
                    {calculatePrice(item.mrp, item.discountPercent)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#5e5c5c',
                      fontWeight: '400',
                      marginLeft: 5,
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#5e5c5c',
                    }}>
                    &#8377; {item.mrp}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 12,
                    color: '#228b22',
                    fontWeight: '600',
                    marginTop: 5,
                  }}>
                  {item.discountPercent}% Off
                </Text>
              </View>

              <Button
                onPress={() => addProductInCartOnPress(item.id, userId)}
                style={{
                  borderWidth: 1,
                  borderColor: '#ddd',
                  borderRadius: 5,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 15, color: 'blue', fontWeight: '500'}}>
                  {' '}
                  Add To Cart{' '}
                </Text>
              </Button>
            </View>
          );
        }}
      />

      {/* <FlatList
        data={apiData.data.cartFullArray}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={item => {
          return ( 
            <>
       
          </>

           )
        
        }}
      /> */}
    </>
  );
};

export default ProductCarousel;

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
