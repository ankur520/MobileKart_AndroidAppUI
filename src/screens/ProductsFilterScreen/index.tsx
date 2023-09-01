import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Button,
} from 'react-native';
import React, { useEffect } from 'react';
import { windowWidth } from '../../utils/Dimensions';

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

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../Redux/slice/AllProductsSlice';

import ProductFilterScreenDouble from '../../components/Products Filter Screen/ProductFilterScreenDouble';

import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';

import ProductFilterScreenSingle from '../../components/Products Filter Screen/ProductFilterScreenSingle';

const ProductsFilterScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter);

  const getProductsFromRedux = useSelector(state => state.allProducts);

  // console.log("counter - " , counter )
  // console.log("allProducts - ", getProductsFromRedux)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <View style={{ width: windowWidth, backgroundColor: '#fff' }}>
        {/* HEADER  */}
        <View
          style={{
            backgroundColor: '#fff',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            position: 'relative',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              onPress={() => navigation.navigate('WelcomeScreen')}
              style={{ marginRight: 10 }}
              name="arrowleft"
              size={30}
              color="#343434"
            />

            <Text
              style={{
                color: '#343434',
                fontSize: 20,
              }}>
              Mobiles
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Fontisto
              style={{ marginRight: 10 }}
              name="search"
              size={20}
              color="#343434"
            />

            <MaterialIcons
              style={{ marginRight: 10 }}
              name="keyboard-voice"
              size={25}
              color="#343434"
            />

            <Ionicons
              style={{ marginRight: 10 }}
              name="camera-outline"
              size={25}
              color="#343434"
            />

            <AntDesign
              // style={{marginRight: 10}}
              name="shoppingcart"
              size={25}
              color="#343434"
            />
          </View>
        </View>

        {/* sub Header */}

        <View
          style={{
            backgroundColor: '#fff',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            position: 'relative',
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text style={{ fontSize: 13, color: '#343434', fontWeight: '500' }}>
                Sort By{' '}
              </Text>
              <Text>
                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text>
                <Ionicons name="filter-outline" size={15} color="#343434" />
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  color: '#343434',
                  fontWeight: '500',
                  marginLeft: 5,
                }}>
                Filter{' '}
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text>
                <SimpleLineIcons
                  // style={{ marginRight: 10 }}
                  name="control-pause"
                  size={15}
                  color="#343434"
                />
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  color: '#343434',
                  fontWeight: '500',
                  marginLeft: 5,
                }}>
                Compare{' '}
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text style={{ fontSize: 13, color: '#343434', fontWeight: '500' }}>
                Brand{' '}
              </Text>
              <Text>
                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text style={{ fontSize: 13, color: '#343434', fontWeight: '500' }}>
                Brand{' '}
              </Text>
              <Text>
                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#343434',
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                Price
              </Text>
              <Text>
                <MaterialCommunityIcons
                  // style={{ marginRight: 10 }}
                  name="brightness-percent"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#343434',
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                {' '}
                Clear All
              </Text>
              <Text>
                <MaterialIcons
                  // style={{ marginRight: 10 }}
                  name="clear"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>
          </ScrollView>
        </View>

        <ScrollView>
          {/* Feature Specific */}

          <View
            style={{
              backgroundColor: '#fff',
              height: 60,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              position: 'relative',
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <MaterialCommunityIcons
                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    15,200{' '}
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    - 20,999{' '}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <MaterialCommunityIcons
                    name="signal-5g"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    5G{' '}
                  </Text>
                  {/* <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text> */}
                </View>
              </View>

              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <Foundation name="burst-new" size={20} color="#343434" />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    New Arrival{' '}
                  </Text>
                  {/* <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text> */}
                </View>
              </View>

              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <MaterialCommunityIcons
                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    15,200{' '}
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    - 20,999{' '}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <MaterialCommunityIcons
                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    15,200{' '}
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    - 20,999{' '}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.dFlexBetween,
                  styles.filterBtn,
                  { borderRadius: 10 },
                ]}>
                <Text>
                  <MaterialCommunityIcons
                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    15,200{' '}
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#343434', fontWeight: '500' }}>
                    - 20,999{' '}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <ProductFilterScreenSingle apiData={getProductsFromRedux} />

          {/* <ProductFilterScreenDouble /> */}

          <View style={{ height: 125, width: 50 }}></View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductsFilterScreen;

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
