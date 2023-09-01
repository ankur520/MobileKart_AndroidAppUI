import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import ErrorAndLoading from '../ErrorAndLoading';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

const ProductCarousel = ({apiData}) => {
  return (
    <>
      <ErrorAndLoading isError={apiData.isError} isLoader={apiData.isLoader} />

      <FlatList
        data={apiData.data.cartFullArray}
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
                  uri: `${item.productId.image1}`,
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
                  {formatProductName(item.productId.name)}
                </Text>

                <View style={[styles.dFlex, {marginTop: 5}]}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    &#8377;
                    {calculatePrice(
                      item.productId.mrp,
                      item.productId.discountPercent,
                    )}
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
                    &#8377; {item.productId.mrp}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 12,
                    color: '#228b22',
                    fontWeight: '600',
                    marginTop: 5,
                  }}>
                  {item.productId.discountPercent}% Off
                </Text>
              </View>

              <Button
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
