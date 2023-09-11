import {StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState, useEffect, useContext} from 'react';
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

import {useSelector, useDispatch} from 'react-redux';

import {fetchCartByUserIdAsync} from '../../Redux/slice/CartSlice';
import {fetchAllProducts} from '../../Redux/slice/AllProductsSlice';

import IsUserLoggedContext from '../../context/isLoggedInContext';

import {calculatePrice} from '../../utils/calculateFunctions';
import BottomPopUp from '../../components/CartTab/BottomPopUp';
import {allAddressAsync} from '../../Redux/slice/AllUserAddressSlice';
import {placeOrderAsync} from '../../Redux/slice/PlaceOrderSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../Redux/slice/UserLoginSlice';

const CartTabs = ({navigation}) => {
  let totalAmount = 0;
  let totalCartTax = 0;
  let totalShippingCharge = 0;
  let totalItems = 0;
  let totalAmountByLength = 0;
  let totalCartSaving = 0;

  const [addressId, setaddressId] = useState();
  const [placeOrderBtn, setplaceOrderBtn] = useState(false);

  const dispatch = useDispatch();
  const userLoggedRedux = useSelector(state => state.userLogin);
  const loginContext = useContext(IsUserLoggedContext);
  const getCartFromRedux = useSelector(state => state.carts);
  const getCartFromReduxData = useSelector(state => state.carts.data);
  const getProductsFromRedux = useSelector(state => state.allProducts);
  const getAddressFromRedux = useSelector(state => state.allUserAddress);

  const calculateCartPricing = () => {
    // console.log("sdsfsd ---> " , getCartFromReduxData )

    try {
      let calculationCondition =
        Object.keys(getCartFromReduxData).length > 0 ? true : false;
      // console.log(calculationCondition)

      if (calculationCondition) {
        // console.log( "--> ",  typeof(getCartFromReduxData.cartFullArray)  , Object.keys(getCartFromReduxData.cartFullArray)  )

        if (getCartFromReduxData.cartFullArray != undefined) {
          totalItems = Object.keys(getCartFromReduxData.cartFullArray).length;

          getCartFromReduxData.cartFullArray.map(item => {
            let productPrice = calculatePrice(
              item.productId.mrp,
              item.productId.discountPercent,
            );

            let calculateTotal = item.qty * productPrice;

            // calculate amount after discount
            let finalAmountAfterDiscount =
              item.productId.mrp -
              parseInt(
                (item.productId.mrp * item.productId.discountPercent) / 100,
              );
            // calculate tax for each product on amount
            let TaxesCharges =
              ((finalAmountAfterDiscount *
                Number(item.productId.taxClass.slice(0, 3))) /
                100) *
              item.qty;

            // accumulate
            totalCartTax += TaxesCharges;
            totalCartSaving += item.productId.mrp - productPrice;
            totalAmountByLength += calculateTotal;
            totalShippingCharge += item.productId.shippingAmount;
            totalAmount += calculateTotal + totalShippingCharge + totalCartTax;
          });
        }
      }
    } catch (error) {
      console.log('Error Catch - ', error);
    }
  };

  calculateCartPricing();

  const alert = msg => {
    Alert.alert(msg);
  };

  const navigate = msg => {
    navigation.navigate(msg);
  };

  const placeOrderSubmitBtn = () => {
    console.log('btn cliced ');

    if (addressId === undefined) {
      Alert.alert('Please Select Your Delivery Address');
    } else {
      if (
        getCartFromReduxData.cartFullArray !== undefined &&
        Object.keys(getCartFromReduxData.cartFullArray).length > 0
      ) {
        console.log('Eligible to place Order');

        let userId = loginContext.userInfo.id;
        let checkoutAmount = totalAmount;

        // console.log( userId,  checkoutAmount , addressId )

        dispatch(
          placeOrderAsync({
            userId: userId,
            checkoutAmount: checkoutAmount,
            addressId: addressId,
            alert: alert,
            navigate: navigate,
          }),
        );
      }
    }
  };

  useEffect(() => {
    // console.log("effect " , loginContext.isUserLoggedIn)
    if (loginContext.isUserLoggedIn) {
      // console.log(loginContext.userInfo.id)
      dispatch(fetchCartByUserIdAsync(loginContext.userInfo.id));
      dispatch(allAddressAsync(loginContext.userInfo.id));
    }
  }, []);

  return (
    <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
      <View style={styles.rootCss}>
        <View style={[styles.dFlex, {}]}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
            }}>
            My Cart
          </Text>

          {/* <Text

            onPress={ () => dispatch( logout()  )  }

            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
            }}>
            -------
          </Text> */}

          <View style={{marginLeft: 30, marginTop: 5}}>
            <FontAwesome
              onPress={() =>
                dispatch(fetchCartByUserIdAsync(loginContext.userInfo.id))
              }
              name="refresh"
              size={20}
              color="blue"
            />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ADDRESS BOX */}

        {loginContext.isUserLoggedIn ? (
          <View style={[styles.dFlexBetween, styles.rootCss]}>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 15}}>
              {' '}
              From Saved Addresses{' '}
            </Text>

            {/* <Button
              style={{borderWidth: 1, borderColor: '#ddd', borderRadius: 5}}>
              {' '}
              Select Delivery Address{' '}
            </Button> */}

            <BottomPopUp
              apiData={getAddressFromRedux}
              addressId={addressId}
              setaddressId={setaddressId}
            />
          </View>
        ) : (
          <View style={[styles.dFlexBetween, styles.rootCss]}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              {' '}
              Please Login
            </Text>
          </View>
        )}

        {/* Cart ITEM */}

        <CartProduct
          apiData={getCartFromRedux}
          userId={loginContext.isUserLoggedIn ? loginContext.userInfo.id : ''}
        />

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
              Total Price ( {totalItems} item)
            </Text>
            <Text style={{color: 'black', fontWeight: '400'}}>
              &#8377;{totalAmountByLength}
            </Text>
          </View>

          <View
            style={[styles.dFlexBetween, {paddingVertical: 5, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '400'}}>Total Tax </Text>
            <Text style={{color: '#228b22', fontWeight: '400'}}>
              &#8377;{totalCartTax}
            </Text>
          </View>

          <View
            style={[styles.dFlexBetween, {paddingVertical: 5, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '400'}}>
              Total Delivery Charges{' '}
            </Text>
            <Text style={{color: '#228b22', fontWeight: '400'}}>
              Free Delivery &#8377;{totalShippingCharge}
            </Text>
          </View>

          <Divider />

          <View
            style={[styles.dFlexBetween, {paddingVertical: 15, fontSize: 13}]}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              Total Cart Amount{' '}
            </Text>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              &#8377; {totalAmount}
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
            You will save &#8377;{totalCartSaving} on this order
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
          <ProductCarousel
            apiData={getProductsFromRedux}
            userId={loginContext.isUserLoggedIn ? loginContext.userInfo.id : ''}
          />
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
              {/* &#8377;35,999{' '} */}
            </Text>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              {' '}
              &#8377;{totalAmount}
            </Text>
          </View>

          <View>
            <Button
              disabled={placeOrderBtn}
              onPress={() => placeOrderSubmitBtn()}
              style={{
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 5,
                backgroundColor: 'orange',
                paddingHorizontal: 35,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                Place Order
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
