import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
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

const CartTabs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

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

      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View
          style={[
            styles.rootCss,
            {marginTop: 10, elevation: 3, width: windowWidth},
          ]}>
          <View style={[styles.dFlex]}>
            <View>
              <Image
                source={{
                  uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
                }}
                style={{width: 100, height: 100, objectFit: 'contain'}}
                resizeMode="contain"
              />

              <View>
                <Picker
                  selectedValue={1}
                  mode="dropdown"
                  style={{color: 'black', border: 0.5, borderColor: '#ddd'}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="qty: 2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="more" value="more" />
                </Picker>
              </View>
            </View>

            <View style={{marginLeft: 5}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 13, color: '#36454F', fontWeight: '600'}}>
                APPLE iPhone 14 Pro Max (Gold, 1 TB)
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 10,
                  color: '#36454F',
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Gold 1TB , 16 GB RAM, M1 chip{' '}
              </Text>

              <View
                style={[styles.dFlex, {marginTop: 10, alignItems: 'center'}]}>
                <View style={styles.dFlex}>
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                </View>

                <Text
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginLeft: 5,
                  }}>
                  {' '}
                  (4,032){' '}
                </Text>
              </View>

              <View style={[styles.dFlex, {marginTop: 10}]}>
                <Text
                  style={{fontSize: 18, color: '#228b22', fontWeight: '600'}}>
                  16% Off
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
                  &#8377;35,999{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  {' '}
                  &#8377;29,999{' '}
                </Text>
              </View>

              <View style={[styles.dFlex, {marginTop: 5}]}>
                <Text
                  style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
                  {' '}
                  3 Offers Applied{' '}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
                  {' '}
                  10 Offers Available{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.dFlex, {marginTop: 5}]}>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              Delivery by Thu Aug 3{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              {'|'}{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
              {' '}
              Free Delivery{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              &#8377;40{' '}
            </Text>
          </View>

          <View
            style={[
              {
                borderTopWidth: 0.5,
                borderTopColor: '#ddd',
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              },
            ]}>
            <Button>
              {' '}
              <AntDesign name="delete" size={15} color="#28282B" />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>Remove</Text>{' '}
            </Button>
            <Button>
              {' '}
              <MaterialIcons name="save-alt" size={15} color="#28282B" />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>
                Save for later
              </Text>{' '}
            </Button>
            <Button>
              {' '}
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={15}
                color="#28282B"
              />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>Buy this now</Text>{' '}
            </Button>
          </View>
        </View>

        {/* Cart ITEM */}

        <View
          style={[
            styles.rootCss,
            {marginTop: 10, elevation: 3, width: windowWidth},
          ]}>
          <View style={[styles.dFlex]}>
            <View>
              <Image
                source={{
                  uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
                }}
                style={{width: 100, height: 100, objectFit: 'contain'}}
                resizeMode="contain"
              />

              <View>
                <Picker
                  selectedValue={1}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }
                  style={{color: 'black', border: 0.5, borderColor: '#ddd'}}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="qty: 2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="more" value="more" />
                </Picker>
              </View>
            </View>

            <View style={{marginLeft: 5}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 13, color: '#36454F', fontWeight: '600'}}>
                APPLE iPhone 14 Pro Max (Gold, 1 TB)
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 10,
                  color: '#36454F',
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Gold 1TB , 16 GB RAM, M1 chip{' '}
              </Text>

              <View
                style={[styles.dFlex, {marginTop: 10, alignItems: 'center'}]}>
                <View style={styles.dFlex}>
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                  <Entypo name="star" size={15} color="#228b22" />
                </View>

                <Text
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginLeft: 5,
                  }}>
                  {' '}
                  (4,032){' '}
                </Text>
              </View>

              <View style={[styles.dFlex, {marginTop: 10}]}>
                <Text
                  style={{fontSize: 18, color: '#228b22', fontWeight: '600'}}>
                  16% Off
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
                  &#8377;35,999{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  {' '}
                  &#8377;29,999{' '}
                </Text>
              </View>

              <View style={[styles.dFlex, {marginTop: 5}]}>
                <Text
                  style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
                  {' '}
                  3 Offers Applied{' '}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
                  {' '}
                  10 Offers Available{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.dFlex, {marginTop: 5}]}>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              Delivery by Thu Aug 3{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              {'|'}{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#228b22', fontWeight: '500'}}>
              {' '}
              Free Delivery{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#36454F', fontWeight: '500'}}>
              {' '}
              &#8377;40{' '}
            </Text>
          </View>

          <View
            style={[
              {
                borderTopWidth: 0.5,
                borderTopColor: '#ddd',
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              },
            ]}>
            <Button>
              {' '}
              <AntDesign name="delete" size={15} color="#28282B" />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>Remove</Text>{' '}
            </Button>
            <Button>
              {' '}
              <MaterialIcons name="save-alt" size={15} color="#28282B" />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>
                Save for later
              </Text>{' '}
            </Button>
            <Button>
              {' '}
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={15}
                color="#28282B"
              />{' '}
              <Text style={{color: '#28282B', fontSize: 15}}>Buy this now</Text>{' '}
            </Button>
          </View>
        </View>

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
                    style={{width: 140, height: 140, objectFit: 'contain'}}
                    resizeMode="contain"
                    source={{
                      uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/k/a/galaxy-fold5-sm-f946bzegins-samsung-original-imagru5udkewyvyn.jpeg?q=70',
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
                  </View>

                  <Button
                    style={{
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderRadius: 5,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{fontSize: 15, color: 'blue', fontWeight: '500'}}>
                      {' '}
                      Add To Cart{' '}
                    </Text>
                  </Button>
                </View>
              </>
            )}
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
