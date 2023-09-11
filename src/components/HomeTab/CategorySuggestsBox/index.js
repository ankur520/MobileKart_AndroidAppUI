import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Button, ActivityIndicator, MD2Colors} from 'react-native-paper';

// icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Utils imports
import {windowWidth, windowHeight} from '../../../utils/Dimensions';

import {
  calculatePrice,
  calculateDelivery,
  formatProductName,
} from '../../../utils/calculateFunctions';

import {Link} from '@react-navigation/native';

const CategorySuggestBox = ({catName, apiData}) => {
  return (
    <>
      <View
        style={{
          // elevation: 5,
          borderBottomWidth: 0.5,
          borderBottomColor: '#ddd',
          marginTop: 10,
        }}>
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                {catName} Suggest You
              </Text>

              <View style={{marginLeft: 15}}>
                <ActivityIndicator
                  animating={apiData.isLoader}
                  color={'#00008B'}
                  size="small"
                  hidesWhenStopped={true}
                />
              </View>
            </View>

            <Link
              to={{
                screen: 'ProductsFilterScreen',
                params: {
                  category: 'Mobiles',
                  subCategory: `${catName}`,
                },
              }}>
              <AntDesign name="rightcircle" size={20} color="#00008B" />
            </Link>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: windowWidth - 20,
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                fontWeight: '400',
              }}>
              {apiData.isError ? 'Something Went Wrong' : ''}
            </Text>

            {/* {console.log( apiData.data.getAllProducts.length )} */}

            <FlatList
              data={apiData.data.getAllProducts}
              renderItem={({item, index}) => {
                if (
                  item.subCategoryId.sub_cat_name === catName &&
                  item.setFeatured === true &&
                  item.recycleBin === false
                ) {
                  // console.log(item.name);
                  return (
                    <>
                      <View
                        style={[
                          styles.categoryBox,
                          {
                            alignItems: 'flex-start',
                            marginRight: 10,
                            width: 'auto',
                          },
                        ]}>
                        {/* <Text> {index === 0 ? "" : "Products Not Available"} </Text> */}
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'contain',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: `${item.image1}`,
                            }}
                          />

                          <Text
                            style={{
                              backgroundColor: '#278250',
                              fontSize: 10,
                              color: '#fff',
                              position: 'absolute',
                              bottom: 0,
                              padding: 5,
                            }}>
                            4.7
                            <FontAwesome name="star" size={10} color="#fff" />
                          </Text>
                        </View>

                        <Link
                          to={{
                            screen: 'ProductDetailScreen',
                            params: {
                              category: `${item.subCategoryId.catId.cat_name}`,
                              subCategory: `${item.subCategoryId.sub_cat_name}`,
                              productId: `${item.id}`,
                            },
                          }}
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          {formatProductName(item.name)}
                        </Link>

                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          <Text
                            style={{
                              textDecorationLine: 'line-through',
                              fontWeight: '400',
                            }}>
                            {item.mrp}
                          </Text>
                          <Text>
                            &#8377;
                            {calculatePrice(item.mrp, item.discountPercent)}
                          </Text>
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          {calculateDelivery(
                            item.shippingStatus,
                            item.shippingAmount,
                          )}
                          &#8377;
                        </Text>
                      </View>
                    </>
                  );
                }
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default CategorySuggestBox;

const styles = StyleSheet.create({});
