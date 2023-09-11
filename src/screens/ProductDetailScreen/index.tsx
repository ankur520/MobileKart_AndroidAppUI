import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

import ProductDetailComponent from '../../components/ProductDetailScreen';
// redux
import {filterProductsApiAsync} from '../../Redux/slice/FilterProductSlice';
import {useSelector, useDispatch} from 'react-redux';

const ProductDetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const fetchProductsFromRedux = useSelector(state => state.filterProduct);
  const {category, subCategory, productId} = route.params;

  // console.log(category , subCategory , productId  )

  // console.log("1 -", fetchProductsFromRedux)

  useEffect(() => {
    let postData = `${category}-${subCategory}-${productId}`;

    dispatch(filterProductsApiAsync(postData));
  }, []);

  return (
    <>
      {fetchProductsFromRedux.isError ? (
        <Text
          style={{
            fontSize: 10,
            color: 'red',
            fontWeight: '500',
          }}>
          {fetchProductsFromRedux.isError ? 'Something Went Wrong' : ''}
        </Text>
      ) : (
        ''
      )}

      {fetchProductsFromRedux.isLoader ? (
        <>
          <View style={{marginLeft: 15}}>
            <ActivityIndicator
              animating={fetchProductsFromRedux.isLoader}
              color={'#00008B'}
              size="small"
              hidesWhenStopped={true}
            />
          </View>
        </>
      ) : (
        <ProductDetailComponent
          apiData={fetchProductsFromRedux}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
