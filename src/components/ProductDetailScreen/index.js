import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {windowWidth} from '../../utils/Dimensions';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';
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
import ProductDetailCarousel from '../../components/ProductDetailCarousel';
import {Button as ButtonPaper} from 'react-native-paper';

import IsUserLoggedContext from '../../context/isLoggedInContext';

import {useSelector, useDispatch} from 'react-redux';

import {fetchCartByUserIdAsync} from '../../Redux/slice/CartSlice';
import {addProductInCartAsync} from '../../Redux/slice/CartSlice';
import {
  calculateDelivery,
  calculatePrice,
  formatProductName,
} from '../../utils/calculateFunctions';
import {addItemInWishListAsync} from '../../Redux/slice/WishListSlice';

const ProductDetailComponent = ({apiData, navigation}) => {
  // console.log( "component -" , apiData.data.getAllProducts[0].name)

  const dispatch = useDispatch();

  const loggedDataContext = useContext(IsUserLoggedContext);
  const [loggedUserCartLength, setloggedUserCartLength] = useState(0);

  const getCartFromRedux = useSelector(state => state.carts);

  const alert = msg => {
    Alert.alert(msg);
  };

  // console.log( "-> ",  typeof( getCartFromRedux.data ), getCartFromRedux )

  const fetchCartByUserIdForLoggedUser = () => {
    if (loggedDataContext.isUserLoggedIn) {
      // console.log(loggedDataContext.userInfo.id)

      dispatch(fetchCartByUserIdAsync(loggedDataContext.userInfo.id));

      const findLengthOfCartData = Object.keys(getCartFromRedux.data).length;
      // console.log( getCartFromRedux )

      if (
        getCartFromRedux.data.cartFullArray !== undefined &&
        findLengthOfCartData > 0
      ) {
        setloggedUserCartLength(
          Object.keys(getCartFromRedux.data.cartFullArray).length,
        );
      }
    }
  };

  useEffect(() => {
    fetchCartByUserIdForLoggedUser();
  }, []);

  const addProductInCartOnPress = async (productId, userId) => {
    if (userId !== '') {
      dispatch(
        addProductInCartAsync({
          productId: productId,
          userId: userId,
          alert: alert,
        }),
      );
    } else {
      Alert.alert('Alert', 'Please Login First');
    }
  };

  const addProductInWishlist = async (productId, userId) => {
    // console.log(userId)

    if (userId !== '') {
      dispatch(
        addItemInWishListAsync({
          productId: productId,
          userId: userId,
          alert: alert,
        }),
      );
    } else {
      Alert.alert('Alert', 'Please Login First');
    }
  };

  return (
    <>
      <FlatList
        data={apiData.data.getAllProducts}
        renderItem={(item, index) => {
          //   console.log('item', item);
          return (
            <>
              <View style={{width: windowWidth, backgroundColor: '#ddd'}}>
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
                      onPress={() => navigation.goBack()}
                      style={{marginRight: 10}}
                      name="arrowleft"
                      size={30}
                      color="#343434"
                    />
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Fontisto
                      style={{marginRight: 10}}
                      name="search"
                      size={20}
                      color="#343434"
                    />

                    <MaterialIcons
                      style={{marginRight: 10}}
                      name="keyboard-voice"
                      size={25}
                      color="#343434"
                    />

                    <View style={{position: 'relative', marginRight: 15}}>
                      <AntDesign
                        onPress={() => navigation.navigate('CartTab')}
                        name="shoppingcart"
                        size={25}
                        color="#343434"
                      />
                      <Text
                        style={{
                          backgroundColor: 'blue',
                          color: '#fff',
                          borderRadius: 30,
                          textAlign: 'center',
                          width: 20,
                          height: 20,
                          fontSize: 13,
                          fontWeight: 600,
                          position: 'absolute',
                          right: -15,
                          top: -10,
                        }}>
                        {loggedUserCartLength}
                      </Text>
                    </View>
                  </View>
                </View>

                <ScrollView style={{position: 'relative'}}>
                  {/* Product images  */}
                  <View style={{backgroundColor: '#fff'}}>
                    <ProductDetailCarousel
                      imagesList={[
                        item.item.image1,
                        item.item.image2,
                        item.item.image3,
                        item.item.image4,
                        item.item.image5,
                      ]}
                    />
                  </View>

                  <View style={[styles.rootCss, {}]}>
                    <Text
                      numberOfLines={3}
                      style={{
                        fontSize: 18,
                        color: '#36454F',
                        fontWeight: '600',
                      }}>
                      {item.item.name}
                    </Text>

                    <View style={[styles.dFlex, {marginTop: 15}]}>
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
                        {calculatePrice(
                          item.item.mrp,
                          item.item.discountPercent,
                        )}
                      </Text>
                    </View>

                    {/* <Text
style={{ fontSize: 18, color: '#36454F', fontWeight: '600', marginTop: 10 }}>
Select Varient
</Text> */}

                    {/* <View style={[styles.dFlexBetween, { padding: 10, marginTop: 10, borderTopWidth: 1, borderTopColor: '#ddd', borderBottomWidth: 1, borderBottomColor: '#ddd' }]}  >

<View style={styles.dFlex} >

<Text
style={{ fontSize: 13, color: '#36454F', fontWeight: '600', marginRight: 10 }}>
<Ionicons name="color-filter" size={20} color="#2448bf" />
</Text>
<Text
style={{ fontSize: 13, color: '#36454F', fontWeight: '400', }}>
lorem:
<Text
style={{ marginLeft: 10, fontSize: 13, color: '#36454F', fontWeight: '800' }}>
ipsum

</Text>

</Text>

</View>

<View style={styles.dFlex} >

<Text
style={{ fontSize: 13, color: '#6e6e6e', fontWeight: '400' }}>
3 More
</Text>
<Text>
<Entypo name="chevron-small-right" size={20} color="#2448bf" />
</Text>

</View>

</View> */}

                    {/* <View style={[styles.dFlexBetween, { padding: 10, marginTop: 10, borderTopWidth: 1, borderTopColor: '#ddd', borderBottomWidth: 1, borderBottomColor: '#ddd' }]}  >

<View style={styles.dFlex} >

<Text
style={{ fontSize: 13, color: '#36454F', fontWeight: '600', marginRight: 10 }}>
<FontAwesome5 name="list" size={15} color="#2448bf" />
</Text>
<Text
style={{ fontSize: 13, color: '#36454F', fontWeight: '400', }}>
loreum:
<Text
style={{ marginLeft: 10, fontSize: 13, color: '#36454F', fontWeight: '800' }}>
ipsum

</Text>

</Text>

</View>

<View style={styles.dFlex} >

<Text
style={{ fontSize: 13, color: '#6e6e6e', fontWeight: '400' }}>
3 More
</Text>
<Text>
<Entypo name="chevron-small-right" size={20} color="#2448bf" />
</Text>

</View>

</View> */}
                  </View>

                  {/* find sellert */}

                  <View
                    style={[
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    {/* <View style={[styles.dFlexBetween, { paddingBottom: 10 }]} >

<Text
style={{ fontSize: 13, color: '#36454F', fontWeight: '500' }}>
Find a selller that delivers to you
</Text>

<ButtonPaper style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 5, backgroundColor: '' }}
> Enter Pincode </ButtonPaper>

</View> */}

                    <View
                      style={[
                        styles.dFlexBetween,
                        {
                          borderTopColor: '#ddd',
                          borderTopWidth: 0.8,
                          padding: 10,
                        },
                      ]}>
                      <View style={styles.dFlex}>
                        <Feather name="truck" size={30} color="#828282" />

                        <View
                          style={[
                            styles.dFlexColumn,
                            {marginLeft: 15, alignItems: 'flex-start'},
                          ]}>
                          <View style={[styles.dFlex, {}]}>
                            <Text
                              style={{
                                fontSize: 13,
                                color: '#228b22',
                                fontWeight: '400',
                              }}>
                              {item.item.shippingStatus}
                            </Text>

                            <Text
                              style={{
                                fontSize: 13,
                                color: '#5e5c5c',
                                fontWeight: '400',
                                marginLeft: 5,

                                textDecorationColor: '#5e5c5c',
                              }}>
                              {' '}
                              &#8377; {item.item.shippingAmount}
                            </Text>

                            <Text
                              style={{
                                fontSize: 13,
                                color: '#5e5c5c',
                                fontWeight: '500',
                                marginLeft: 5,
                              }}>
                              {'|'}
                            </Text>

                            <Text
                              style={{
                                fontSize: 13,
                                color: '#36454F',
                                fontWeight: '600',
                                marginLeft: 5,
                              }}>
                              Delivery by 5 Aug
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '800',
                              marginTop: 2,
                            }}>
                            Saturday
                          </Text>

                          <View style={[styles.dFlex, {marginTop: 2}]}>
                            <Text
                              style={{
                                fontSize: 13,
                                color: '#36454F',
                                fontWeight: '400',
                              }}>
                              If Ordered within
                            </Text>

                            <Text
                              style={{
                                fontSize: 13,
                                color: 'red',
                                fontWeight: '500',
                              }}>
                              {' '}
                              01h 23m 06s
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View>
                        <Text>
                          <Entypo
                            name="chevron-small-right"
                            size={20}
                            color="#2448bf"
                          />
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      position: 'fixed',
                      bottom: 0,
                    }}>
                    <View style={{width: '50%'}}>
                      <ButtonPaper
                        onPress={() =>
                          addProductInWishlist(
                            item.item.id,
                            loggedDataContext.userInfo.id,
                          )
                        }
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 5,
                          backgroundColor: '#2874f0',
                          height: 50,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '600',
                            color: '#fff',
                          }}>
                          Add in Wishlist
                        </Text>
                      </ButtonPaper>
                    </View>

                    <View style={{width: '50%'}}>
                      <ButtonPaper
                        onPress={() =>
                          addProductInCartOnPress(
                            item.item.id,
                            loggedDataContext.userInfo.id,
                          )
                        }
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 5,
                          backgroundColor: '#FFC300',
                          height: 50,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '600',
                            color: '#fff',
                          }}>
                          Add in Cart
                        </Text>
                      </ButtonPaper>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.dFlexBetween,
                      {
                        marginTop: 3,
                        backgroundColor: '#fff',
                        padding: 10,
                        justifyContent: 'space-evenly',
                      },
                    ]}>
                    <View style={[styles.dFlexColumn, {}]}>
                      <MaterialIcons
                        name="miscellaneous-services"
                        size={30}
                        color="blue"
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        7 Days
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '500',
                        }}>
                        Service Center
                      </Text>
                    </View>

                    <View style={[styles.dFlexColumn, {}]}>
                      <MaterialCommunityIcons
                        name="account-cash"
                        size={30}
                        color="green"
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        Cash On Delivery
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '500',
                        }}>
                        available
                      </Text>
                    </View>

                    <View style={[styles.dFlexColumn, {}]}>
                      <FontAwesome
                        name="handshake-o"
                        size={30}
                        color="orange"
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        Plus ( F-Assured )
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#36454F',
                        fontWeight: '800',
                        marginLeft: 10,
                        marginBottom: 10,
                      }}>
                      Product Description
                    </Text>

                    <Text
                      style={{
                        fontSize: 13,
                        color: '#36454F',
                        fontWeight: '600',
                        marginLeft: 10,
                      }}>
                      {item.item.productDescription}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.dFlex,
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    <Feather name="trending-up" size={30} color="blue" />

                    <Text
                      style={{
                        fontSize: 13,
                        color: '#36454F',
                        fontWeight: '800',
                        marginLeft: 10,
                      }}>
                      17,000 +
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#36454F',
                          fontWeight: '400',
                          marginTop: 5,
                        }}>
                        {' '}
                        people orderd this in the last 15 days
                      </Text>
                    </Text>
                  </View>

                  {/* HIGHLIGHTS */}

                  <View
                    style={[
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    <View style={styles.dFlexBetween}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Highlights
                      </Text>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          paddingHorizontal: 10,
                        }}>
                        <ButtonPaper style={{alignItems: 'baseline'}}>
                          <Ionicons
                            name="search-outline"
                            size={15}
                            color="blue"
                          />
                          <Text> Search </Text>
                        </ButtonPaper>
                      </View>
                    </View>

                    {/* HIGHLIGHTS */}
                    <View>
                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 40, height: 40, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://cdn.pixabay.com/photo/2013/07/12/17/56/ram-152655_960_720.png',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            RAM | ROM
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            6 GB RAM | 128 GB ROM
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            store up to 3000 photos
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 40, height: 40, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-cpu-vector-icon-design-illustration-png-image_6597595.png',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            Processor
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            Exynos 1330 octa core | Octa Core | 2.4 GHz
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            Powerful Performance No Hang Phone
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 40, height: 40, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://thumbs.dreamstime.com/b/photo-camera-vector-icon-cam-vector-icon-photo-camera-illustration-symbol-web-sites-mobile-devise-photo-camera-vector-icon-150330964.jpg',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            RAM | ROM
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            6 GB RAM | 128 GB ROM
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            store up to 3000 photos
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 40, height: 40, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://i.pinimg.com/originals/3d/88/1c/3d881c62f4e32c03879b316e4aa9b5da.jpg',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            Rear Camera
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            50 MP + 2 MP
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            Get Vibrant Pictures , Full of details
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 30, height: 30, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://cdn.pixabay.com/photo/2013/07/12/17/56/ram-152655_960_720.png',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            Front CAMERA
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            13 MP
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            Attractive selfies with clear & Sharp Colours
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.dFlex, {marginTop: 5}]}>
                        <Image
                          style={{width: 30, height: 30, objectFit: 'cover'}}
                          resizeMode="contain"
                          source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3wGPv-vQyNKelv9_mrCwPixMMewEQtA5rzPUamY2JoRGxuoGRK65ah0faym5S_xriws&usqp=CAU',
                          }}
                        />

                        <View style={{marginLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '300',
                              marginTop: 5,
                            }}>
                            Display
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '700',
                              marginTop: 5,
                            }}>
                            6.6 inch FULL HD + LCD Display
                          </Text>

                          <Text
                            style={{
                              fontSize: 13,
                              color: '#36454F',
                              fontWeight: '400',
                              marginTop: 5,
                            }}>
                            store up to 3000 photos
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* OTHer Details  */}

                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '500',
                          marginTop: 20,
                        }}>
                        Other Details
                      </Text>

                      <View style={{marginTop: 10}}>
                        <View
                          style={[
                            styles.dFlex,
                            {backgroundColor: '#fff', padding: 10},
                          ]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              width: 120,
                            }}>
                            Network Types
                          </Text>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              marginLeft: 30,
                            }}>
                            2G, 3G , 4G, 5G
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.dFlex,
                            {backgroundColor: '#F0F0F0', padding: 10},
                          ]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              width: 120,
                            }}>
                            Sim Types
                          </Text>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              marginLeft: 30,
                            }}>
                            Dual Sim
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.dFlex,
                            {backgroundColor: '#fff', padding: 10},
                          ]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              width: 120,
                            }}
                            numberOfLines={2}>
                            Expandable Storage
                          </Text>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              marginLeft: 30,
                            }}>
                            Yes
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.dFlex,
                            {backgroundColor: '#F0F0F0', padding: 10},
                          ]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              width: 120,
                            }}>
                            Audio Jack
                          </Text>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '500',
                              marginLeft: 30,
                            }}>
                            Yes
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* RATINGS & REVIEWS */}

                  <View
                    style={[
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    <View style={[styles.dFlexBetween, {}]}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Ratings & Reviews
                      </Text>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          paddingHorizontal: 10,
                        }}>
                        <ButtonPaper> Rate Product </ButtonPaper>
                      </View>
                    </View>

                    <View
                      style={[
                        styles.dFlexBetween,
                        {justifyContent: 'space-around'},
                      ]}>
                      {/* LEFT SIDE  */}

                      <View style={[styles.dFlexColumn, {marginTop: 10}]}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Very Good
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
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          26,156 ratings and
                        </Text>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          2040 reviews
                        </Text>
                      </View>

                      {/* RIGHT SIDE  */}
                      <View style={[styles.dFlexColumn, {}]}>
                        <View
                          style={[
                            styles.dFlex,
                            {marginBottom: 5, marginTop: 10},
                          ]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '600',
                              marginRight: 5,
                            }}>
                            5
                          </Text>

                          <Entypo name="star" size={15} color="black" />

                          <View
                            style={{
                              width: 80,
                              backgroundColor: '#ddd',
                              height: 5,
                              borderRadius: 10,
                              marginLeft: 5,
                            }}>
                            <Text
                              style={{
                                width: 60,
                                height: 5,
                                backgroundColor: '#228b22',
                              }}>
                              {' '}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B4B4B4',
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            15,323
                          </Text>
                        </View>

                        <View style={[styles.dFlex, {marginBottom: 5}]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '600',
                              marginRight: 5,
                            }}>
                            4
                          </Text>

                          <Entypo name="star" size={15} color="black" />

                          <View
                            style={{
                              width: 80,
                              backgroundColor: '#ddd',
                              height: 5,
                              borderRadius: 10,
                              marginLeft: 5,
                            }}>
                            <Text
                              style={{
                                width: 10,
                                height: 5,
                                backgroundColor: '#228b22',
                              }}>
                              {' '}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B4B4B4',
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            15,323
                          </Text>
                        </View>

                        <View style={[styles.dFlex, {marginBottom: 5}]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '600',
                              marginRight: 5,
                            }}>
                            3
                          </Text>

                          <Entypo name="star" size={15} color="black" />

                          <View
                            style={{
                              width: 80,
                              backgroundColor: '#ddd',
                              height: 5,
                              borderRadius: 10,
                              marginLeft: 5,
                            }}>
                            <Text
                              style={{
                                width: 50,
                                height: 5,
                                backgroundColor: '#228b22',
                              }}>
                              {' '}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B4B4B4',
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            15,323
                          </Text>
                        </View>

                        <View style={[styles.dFlex, {marginBottom: 5}]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '600',
                              marginRight: 5,
                            }}>
                            2
                          </Text>

                          <Entypo name="star" size={15} color="black" />

                          <View
                            style={{
                              width: 80,
                              backgroundColor: '#ddd',
                              height: 5,
                              borderRadius: 10,
                              marginLeft: 5,
                            }}>
                            <Text
                              style={{
                                width: 20,
                                height: 5,
                                backgroundColor: '#228b22',
                              }}>
                              {' '}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B4B4B4',
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            15,323
                          </Text>
                        </View>

                        <View style={[styles.dFlex, {marginBottom: 5}]}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#36454F',
                              fontWeight: '600',
                              marginRight: 5,
                            }}>
                            1
                          </Text>

                          <Entypo name="star" size={15} color="black" />

                          <View
                            style={{
                              width: 80,
                              backgroundColor: '#ddd',
                              height: 5,
                              borderRadius: 10,
                              marginLeft: 5,
                            }}>
                            <Text
                              style={{
                                width: 70,
                                height: 5,
                                backgroundColor: '#228b22',
                              }}>
                              {' '}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B4B4B4',
                              fontWeight: '600',
                              marginLeft: 5,
                            }}>
                            15,323
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* BOTTOM TOTAL REVIEW SUMMARY */}
                    <View
                      style={[
                        styles.dFlexBetween,
                        {marginTop: 20, paddingHorizontal: 20},
                      ]}>
                      <View style={styles.dFlexColumn}>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#ddd',
                            height: 50,
                            borderRadius: 50,
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              width: 50,
                              backgroundColor: 'green',
                              height: 50,
                              borderRadius: 60,
                              position: 'relative',
                            }}>
                            <View
                              style={{
                                width: 40,
                                backgroundColor: '#fff',
                                height: 40,
                                borderRadius: 60,
                                margin: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: 'blue',
                                  fontWeight: '600',
                                  marginTop: 0,
                                  position: 'absolute',
                                  top: '25%',
                                  left: '25%',
                                }}>
                                3.7
                              </Text>
                            </View>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Camera
                        </Text>
                      </View>

                      <View style={styles.dFlexColumn}>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#ddd',
                            height: 50,
                            borderRadius: 50,
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              width: 50,
                              backgroundColor: 'green',
                              height: 50,
                              borderRadius: 60,
                              position: 'relative',
                            }}>
                            <View
                              style={{
                                width: 40,
                                backgroundColor: '#fff',
                                height: 40,
                                borderRadius: 60,
                                margin: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: 'blue',
                                  fontWeight: '600',
                                  marginTop: 0,
                                  position: 'absolute',
                                  top: '25%',
                                  left: '25%',
                                }}>
                                3.7
                              </Text>
                            </View>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Battery
                        </Text>
                      </View>

                      <View style={styles.dFlexColumn}>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#ddd',
                            height: 50,
                            borderRadius: 50,
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              width: 50,
                              backgroundColor: 'green',
                              height: 50,
                              borderRadius: 60,
                              position: 'relative',
                            }}>
                            <View
                              style={{
                                width: 40,
                                backgroundColor: '#fff',
                                height: 40,
                                borderRadius: 60,
                                margin: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: 'blue',
                                  fontWeight: '600',
                                  marginTop: 0,
                                  position: 'absolute',
                                  top: '25%',
                                  left: '25%',
                                }}>
                                3.7
                              </Text>
                            </View>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Display
                        </Text>
                      </View>

                      <View style={styles.dFlexColumn}>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#ddd',
                            height: 50,
                            borderRadius: 50,
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              width: 50,
                              backgroundColor: 'green',
                              height: 50,
                              borderRadius: 60,
                              position: 'relative',
                            }}>
                            <View
                              style={{
                                width: 40,
                                backgroundColor: '#fff',
                                height: 40,
                                borderRadius: 60,
                                margin: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: 'blue',
                                  fontWeight: '600',
                                  marginTop: 0,
                                  position: 'absolute',
                                  top: '25%',
                                  left: '25%',
                                }}>
                                3.7
                              </Text>
                            </View>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Design
                        </Text>
                      </View>

                      <View style={styles.dFlexColumn}>
                        <View
                          style={{
                            width: 50,
                            backgroundColor: '#ddd',
                            height: 50,
                            borderRadius: 50,
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              width: 50,
                              backgroundColor: 'green',
                              height: 50,
                              borderRadius: 60,
                              position: 'relative',
                            }}>
                            <View
                              style={{
                                width: 40,
                                backgroundColor: '#fff',
                                height: 40,
                                borderRadius: 60,
                                margin: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: 'blue',
                                  fontWeight: '600',
                                  marginTop: 0,
                                  position: 'absolute',
                                  top: '25%',
                                  left: '25%',
                                }}>
                                3.7
                              </Text>
                            </View>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            color: '#828282',
                            fontWeight: '800',
                            marginTop: 5,
                          }}>
                          Performance
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* user posted reviews  */}
                  <View
                    style={[
                      {
                        backgroundColor: '#fff',
                        padding: 10,
                        borderTopWidth: 0.5,
                        borderTopColor: '#ddd',
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ddd',
                      },
                    ]}>
                    <View style={styles.dFlex}>
                      <View
                        style={[
                          styles.dFlex,
                          {marginTop: 0, alignItems: 'center'},
                        ]}>
                        <View style={styles.dFlex}>
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                        </View>
                      </View>

                      <Text
                        style={{
                          fontSize: 12,
                          color: '#828282',
                          fontWeight: '800',
                          marginLeft: 20,
                        }}>
                        Highly Recommend
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: 12,
                        color: '#828282',
                        fontWeight: '600',
                        paddingHorizontal: 20,
                        marginTop: 10,
                        lineHeight: 20,
                      }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias ipsam mollitia fuga, iusto quidem culpa minima!
                      Optio praesentium asperiores dolores mollitia, error
                      temporibus atque iure velit fugit enim nostrum eveniet!
                    </Text>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />

                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />

                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />
                    </View>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 20,
                          marginRight: 10,
                        }}>
                        <ButtonPaper>
                          <Text style={{marginRight: 40}}>
                            <FontAwesome
                              name="thumbs-o-up"
                              size={15}
                              color="black"
                            />
                          </Text>

                          <Text
                            style={{
                              fontSize: 10,
                              color: '#828282',
                              fontWeight: '600',
                              marginLeft: 10,
                            }}>
                            Helpful For 119
                          </Text>
                        </ButtonPaper>
                      </View>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 20,
                        }}>
                        <ButtonPaper>
                          <Text style={{marginRight: 40}}>
                            <FontAwesome
                              name="thumbs-o-down"
                              size={15}
                              color="black"
                            />
                          </Text>

                          <Text
                            style={{
                              fontSize: 10,
                              color: '#828282',
                              fontWeight: '600',
                              marginLeft: 10,
                            }}>
                            15
                          </Text>
                        </ButtonPaper>
                      </View>
                    </View>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <MaterialIcons name="verified" size={15} color="black" />

                      <Text
                        style={{
                          fontSize: 10,
                          color: '#828282',
                          fontWeight: '400',
                          marginHorizontal: 5,
                        }}>
                        Verified Purchases
                      </Text>

                      <Text
                        style={{
                          fontSize: 10,
                          color: '#828282',
                          fontWeight: '400',
                        }}>
                        1 Monts ago
                      </Text>
                    </View>
                  </View>

                  {/* user posted reviews  */}
                  <View
                    style={[
                      {
                        backgroundColor: '#fff',
                        padding: 10,
                        borderTopWidth: 0.5,
                        borderTopColor: '#ddd',
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ddd',
                      },
                    ]}>
                    <View style={styles.dFlex}>
                      <View
                        style={[
                          styles.dFlex,
                          {marginTop: 0, alignItems: 'center'},
                        ]}>
                        <View style={styles.dFlex}>
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                          <Entypo name="star" size={15} color="#228b22" />
                        </View>
                      </View>

                      <Text
                        style={{
                          fontSize: 12,
                          color: '#828282',
                          fontWeight: '800',
                          marginLeft: 20,
                        }}>
                        Highly Recommend
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: 12,
                        color: '#828282',
                        fontWeight: '600',
                        paddingHorizontal: 20,
                        marginTop: 10,
                        lineHeight: 20,
                      }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias ipsam mollitia fuga, iusto quidem culpa minima!
                      Optio praesentium asperiores dolores mollitia, error
                      temporibus atque iure velit fugit enim nostrum eveniet!
                    </Text>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />

                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />

                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 5,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv98G5w08j-lFxWZaiGQdMX2fQX3Wf1sRDoMBqAhlo1xeAlEUKhZqXg_5B_eHp3358_M&usqp=CAU',
                        }}
                      />
                    </View>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 20,
                          marginRight: 10,
                        }}>
                        <ButtonPaper>
                          <Text style={{marginRight: 40}}>
                            <FontAwesome
                              name="thumbs-o-up"
                              size={15}
                              color="black"
                            />
                          </Text>

                          <Text
                            style={{
                              fontSize: 10,
                              color: '#828282',
                              fontWeight: '600',
                              marginLeft: 10,
                            }}>
                            Helpful For 119
                          </Text>
                        </ButtonPaper>
                      </View>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          borderRadius: 20,
                        }}>
                        <ButtonPaper>
                          <Text style={{marginRight: 40}}>
                            <FontAwesome
                              name="thumbs-o-down"
                              size={15}
                              color="black"
                            />
                          </Text>

                          <Text
                            style={{
                              fontSize: 10,
                              color: '#828282',
                              fontWeight: '600',
                              marginLeft: 10,
                            }}>
                            15
                          </Text>
                        </ButtonPaper>
                      </View>
                    </View>

                    <View style={[styles.dFlex, {marginTop: 10}]}>
                      <MaterialIcons name="verified" size={15} color="black" />

                      <Text
                        style={{
                          fontSize: 10,
                          color: '#828282',
                          fontWeight: '400',
                          marginHorizontal: 5,
                        }}>
                        Verified Purchases
                      </Text>

                      <Text
                        style={{
                          fontSize: 10,
                          color: '#828282',
                          fontWeight: '400',
                        }}>
                        1 Monts ago
                      </Text>
                    </View>

                    <View style={[styles.dFlexBetween, {}]}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#828282',
                          fontWeight: '600',
                        }}>
                        All XYZ reviews
                      </Text>

                      <Text>
                        <Entypo
                          name="chevron-small-right"
                          size={20}
                          color="#2448bf"
                        />
                      </Text>
                    </View>
                  </View>

                  {/* QUESTION AND ANSWERS SECTION  */}

                  <View
                    style={[
                      {marginTop: 3, backgroundColor: '#fff', padding: 10},
                    ]}>
                    {/* HEADER */}
                    <View style={styles.dFlexBetween}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Questions and Answers
                      </Text>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#ddd',
                          paddingHorizontal: 10,
                        }}>
                        <ButtonPaper style={{alignItems: 'baseline'}}>
                          <Ionicons
                            name="search-outline"
                            size={15}
                            color="blue"
                          />
                          <Text> Search </Text>
                        </ButtonPaper>
                      </View>
                    </View>

                    {/* question CONTENT */}
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ddd',
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Q: Is Wifi calling Available
                      </Text>

                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '400',
                          marginTop: 5,
                        }}>
                        A: Yes
                      </Text>

                      <View style={[styles.dFlexBetween, {marginTop: 10}]}>
                        <View style={[styles.dFlex, {marginTop: 10}]}>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                              marginRight: 10,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-up"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                Helpful For 119
                              </Text>
                            </ButtonPaper>
                          </View>

                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-down"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                15
                              </Text>
                            </ButtonPaper>
                          </View>
                        </View>

                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={15}
                          color="black"
                        />
                      </View>

                      <View style={[styles.dFlex, {marginTop: 10}]}>
                        <MaterialIcons
                          name="verified"
                          size={15}
                          color="black"
                        />

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                            marginHorizontal: 5,
                          }}>
                          Certified Buyer
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                          }}>
                          XYz
                        </Text>
                      </View>
                    </View>

                    {/* question CONTENT */}
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ddd',
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Q: Face Lock Available Or Not
                      </Text>

                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '400',
                          marginTop: 5,
                        }}>
                        A: Yes
                      </Text>

                      <View style={[styles.dFlexBetween, {marginTop: 10}]}>
                        <View style={[styles.dFlex, {marginTop: 10}]}>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                              marginRight: 10,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-up"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                Helpful For 119
                              </Text>
                            </ButtonPaper>
                          </View>

                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-down"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                15
                              </Text>
                            </ButtonPaper>
                          </View>
                        </View>

                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={15}
                          color="black"
                        />
                      </View>

                      <View style={[styles.dFlex, {marginTop: 10}]}>
                        <MaterialIcons
                          name="verified"
                          size={15}
                          color="black"
                        />

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                            marginHorizontal: 5,
                          }}>
                          Certified Buyer
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                          }}>
                          XYz
                        </Text>
                      </View>
                    </View>

                    {/* question CONTENT */}
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#ddd',
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '600',
                          marginTop: 5,
                        }}>
                        Q: Where is the finger print sensor Placed
                      </Text>

                      <Text
                        style={{
                          fontSize: 15,
                          color: '#36454F',
                          fontWeight: '400',
                          marginTop: 5,
                        }}>
                        A: On the Power Key
                      </Text>

                      <View style={[styles.dFlexBetween, {marginTop: 10}]}>
                        <View style={[styles.dFlex, {marginTop: 10}]}>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                              marginRight: 10,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-up"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                Helpful For 119
                              </Text>
                            </ButtonPaper>
                          </View>

                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#ddd',
                              borderRadius: 20,
                            }}>
                            <ButtonPaper>
                              <Text style={{marginRight: 40}}>
                                <FontAwesome
                                  name="thumbs-o-down"
                                  size={15}
                                  color="black"
                                />
                              </Text>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#828282',
                                  fontWeight: '600',
                                  marginLeft: 10,
                                }}>
                                15
                              </Text>
                            </ButtonPaper>
                          </View>
                        </View>

                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={15}
                          color="black"
                        />
                      </View>

                      <View style={[styles.dFlex, {marginTop: 10}]}>
                        <MaterialIcons
                          name="verified"
                          size={15}
                          color="black"
                        />

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                            marginHorizontal: 5,
                          }}>
                          Certified Buyer
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: '#828282',
                            fontWeight: '400',
                          }}>
                          XYz
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* <View style={[{ marginTop: 3, backgroundColor: '#fff', padding: 10, }]} >

<Text
style={{ fontSize: 15, color: '#36454F', fontWeight: '600', marginTop: 5 }}>
Similar Products to Compare
</Text>

<View style={[{ borderTopWidth: 0.5, borderTopColor: "#ddd", padding: 10, marginTop: 10 }]}  >



</View>

<View>

<Text
style={{ fontSize: 15, color: '#36454F', fontWeight: '600', marginTop: 5 }}>

</Text>

</View>

</View> */}

                  {/* 100% orginal orduct  */}
                  <View
                    style={[
                      styles.dFlex,
                      {paddingVertical: 10, justifyContent: 'center'},
                    ]}>
                    <MaterialIcons
                      name="verified-user"
                      size={30}
                      color="#5e5c5c"
                    />

                    <View>
                      <Text
                        style={{
                          marginLeft: 15,
                          color: '#5e5c5c',
                          fontSize: 12,
                          fontWeight: '500',
                        }}>
                        100% Original Products{' '}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          color: '#5e5c5c',
                          fontSize: 12,
                          fontWeight: '500',
                        }}>
                        with Assured Brand Warranty{' '}
                      </Text>
                    </View>
                  </View>

                  {/* similar products in this range  */}

                  <View style={[styles.rootCss, {marginTop: 10, elevation: 5}]}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        marginBottom: 10,
                      }}>
                      Similar Products in this Price Range
                    </Text>

                    <FlatList
                      data={['', '', '', '', '', '', '', '', '', '', '']}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={item => (
                        <>
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
                              style={{
                                width: 140,
                                height: 140,
                                objectFit: 'contain',
                              }}
                              resizeMode="contain"
                              source={{
                                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/k/a/galaxy-fold5-sm-f946bzegins-samsung-original-imagru5udkewyvyn.jpeg?q=70',
                              }}
                            />

                            <View style={{marginTop: 10}}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 11,
                                  color: '#36454F',
                                  fontWeight: '600',
                                }}>
                                SAMSUNG
                              </Text>

                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 10,
                                  color: '#36454F',
                                  fontWeight: '600',
                                }}>
                                APPLE iPhone 14 Pro Max (Gold, 1 TB){' '}
                              </Text>

                              <View style={[styles.dFlex, {marginTop: 5}]}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: 'black',
                                    fontWeight: '500',
                                  }}>
                                  &#8377;29,999
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
                                  &#8377;35,999
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#228b22',
                                  fontWeight: '600',
                                  marginTop: 5,
                                }}>
                                16% Off
                              </Text>

                              <View style={styles.dFlex}>
                                <View
                                  style={[
                                    styles.dFlex,
                                    {marginTop: 0, alignItems: 'center'},
                                  ]}>
                                  <View style={styles.dFlex}>
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                  </View>
                                </View>

                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: '#828282',
                                    fontWeight: '800',
                                    marginLeft: 3,
                                  }}>
                                  ( 165 )
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#228b22',
                                  fontWeight: '600',
                                  marginTop: 5,
                                }}>
                                Get at &#8377;35,999 with offers
                              </Text>
                            </View>
                          </View>
                        </>
                      )}
                    />
                  </View>

                  <View style={[styles.rootCss, {marginTop: 10, elevation: 5}]}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '500',
                        marginBottom: 10,
                      }}>
                      Recently Viewed
                    </Text>

                    <FlatList
                      data={['', '', '', '', '', '', '', '', '', '', '']}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={item => (
                        <>
                          <View
                            style={{
                              marginTop: 10,
                              borderWidth: 0.7,
                              borderColor: '#ddd',
                              borderRadius: 5,
                              paddingHorizontal: 5,
                              paddingBottom: 10,
                              width: 160,
                              marginRight: 10,
                            }}>
                            <Image
                              style={{
                                width: 140,
                                height: 140,
                                objectFit: 'contain',
                              }}
                              resizeMode="contain"
                              source={{
                                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/k/a/galaxy-fold5-sm-f946bzegins-samsung-original-imagru5udkewyvyn.jpeg?q=70',
                              }}
                            />

                            <View style={{marginTop: 10}}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 11,
                                  color: '#36454F',
                                  fontWeight: '600',
                                }}>
                                SAMSUNG
                              </Text>

                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 10,
                                  color: '#36454F',
                                  fontWeight: '600',
                                }}>
                                APPLE iPhone 14 Pro Max (Gold, 1 TB){' '}
                              </Text>

                              <View style={[styles.dFlex, {marginTop: 5}]}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: 'black',
                                    fontWeight: '500',
                                  }}>
                                  &#8377;29,999
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
                                  &#8377;35,999
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#228b22',
                                  fontWeight: '600',
                                  marginTop: 5,
                                }}>
                                16% Off
                              </Text>

                              <View style={styles.dFlex}>
                                <View
                                  style={[
                                    styles.dFlex,
                                    {marginTop: 0, alignItems: 'center'},
                                  ]}>
                                  <View style={styles.dFlex}>
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                    <Entypo
                                      name="star"
                                      size={15}
                                      color="#228b22"
                                    />
                                  </View>
                                </View>

                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: '#828282',
                                    fontWeight: '800',
                                    marginLeft: 3,
                                  }}>
                                  ( 165 )
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 10,
                                  color: '#228b22',
                                  fontWeight: '600',
                                  marginTop: 5,
                                }}>
                                Get at &#8377;35,999 with offers
                              </Text>
                            </View>
                          </View>
                        </>
                      )}
                    />
                  </View>

                  <Text style={{height: 20, width: 200}}> </Text>
                </ScrollView>
              </View>
            </>
          );
        }}
      />

      {/* {
const findObjectLength = Object.keys(apiData.data).length;

if (findObjectLength > 0 ) {

apiData.data.getAllProducts.map( (data) => {

return (
<Text>dfasdfasdfasdfasdsadfasdfasf</Text>
)

} )

}

} */}
    </>
  );
};

export default ProductDetailComponent;

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
    alignItems: 'center',
  },

  dFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },

  // head: { height: 40, backgroundColor: 'orange' },

  wrapper: {flexDirection: 'row'},
  title: {width: '30%', backgroundColor: '#2ecc71'},
  row: {width: '70%', backgroundColor: 'orange'},
  text: {textAlign: 'center', color: 'black'},
});
