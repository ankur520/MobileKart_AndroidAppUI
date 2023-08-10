import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button } from 'react-native'
import React from 'react'
import { windowWidth } from '../../utils/Dimensions'


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



const ProductsFilterScreen = ({ navigation }) => {

  let productArray = ['', ''];

  return (

    <>

      <View style={{ width: windowWidth, backgroundColor: '#fff' }} >

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

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }} >

            <AntDesign

              onPress={() => navigation.navigate("WelcomeScreen")}

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
              alignItems: 'center'
            }} >

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

        <View style={{
          backgroundColor: '#fff',
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          position: 'relative',
        }} >


          <ScrollView horizontal showsHorizontalScrollIndicator={false}  >



            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500' }} >Sort By </Text>
              <Text>

                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text>

                <Ionicons
                  name="filter-outline"
                  size={15}
                  color="#343434"
                />
              </Text>

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500', marginLeft: 5 }} >Filter </Text>

            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text>

                <SimpleLineIcons
                  // style={{ marginRight: 10 }}
                  name="control-pause"
                  size={15}
                  color="#343434"
                />
              </Text>

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500', marginLeft: 5 }} >Compare </Text>

            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500' }} >Brand </Text>
              <Text>

                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500' }} >Brand </Text>
              <Text>

                <Entypo
                  // style={{ marginRight: 10 }}
                  name="chevron-down"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500', marginRight: 5 }} >Price</Text>
              <Text>

                <MaterialCommunityIcons
                  // style={{ marginRight: 10 }}
                  name="brightness-percent"
                  size={15}
                  color="#343434"
                />
              </Text>
            </View>

            <View style={[styles.dFlexBetween, styles.filterBtn]} >

              <Text style={{ fontSize: 13, color: "#343434", fontWeight: '500', marginRight: 5 }} > Clear All</Text>
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


        <ScrollView   >

          {/* Feature Specific */}

          <View style={{
            backgroundColor: '#fff',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            position: 'relative',
          }} >


            <ScrollView horizontal showsHorizontalScrollIndicator={false}  >



              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <MaterialCommunityIcons

                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >15,200 </Text>
                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text>

                </View>

              </View>

              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <MaterialCommunityIcons

                    name="signal-5g"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >5G </Text>
                  {/* <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text> */}

                </View>

              </View>

              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <Foundation

                    name="burst-new"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >New Arrival </Text>
                  {/* <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text> */}

                </View>

              </View>


              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <MaterialCommunityIcons

                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >15,200 </Text>
                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text>

                </View>

              </View>


              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <MaterialCommunityIcons

                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >15,200 </Text>
                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text>

                </View>

              </View>

              <View style={[styles.dFlexBetween, styles.filterBtn, { borderRadius: 10 }]} >

                <Text>

                  <MaterialCommunityIcons

                    name="currency-inr"
                    size={20}
                    color="#343434"
                  />
                </Text>

                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }} >

                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >15,200 </Text>
                  <Text style={{ fontSize: 10, color: "#343434", fontWeight: '500' }} >- 20,999 </Text>

                </View>

              </View>



            </ScrollView>






          </View>


          {/*  Products Car6485d  */}




          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, backgroundColor: '#fff' }} >



            <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#ddd', borderBottomWidth: 0.5 }}  >

              <View style={{ position: 'relative', }} >

                <Image source={{ uri: "https://rukminim2.flixcart.com/image/832/832/xif0q/bed/j/y/5/-original-imagpprf9wppvhuy.jpeg?q=70" }} style={{ height: 200, width: 'auto' }} />

                <Text style={{ position: 'absolute', left: 5, top: 5, backgroundColor: 'green', color: "#fff", padding: 5, fontSize: 10 }} >BESTSELLER</Text>

                <Text style={{ position: 'absolute', right: 10, top: 10 }} ><FontAwesome name="heart" size={20} color="#fff" /> </Text>
              </View>


              <View style={{ marginTop: 10, paddingHorizontal: 10 }} >

                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '600' }}>
                    16% Off
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#5e5c5c',
                      fontWeight: '500',
                      marginLeft: 5,
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#5e5c5c',
                    }}>
                    {' '}
                    &#8377;35,999{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '800',
                      marginLeft: 5,
                    }}>
                    {' '}
                    &#8377;29,999{' '}
                  </Text>
                </View>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 10,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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



                <View style={[styles.dFlex, { marginTop: 5, paddingBottom: 5 }]}>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    Free Delivery
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {/* 10 Offers Available{' '} */}
                  </Text>
                </View>
              </View>




            </View>



            <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#ddd', borderBottomWidth: 0.5 }}  >

              <View style={{ position: 'relative', }} >

                <Image source={{ uri: "https://rukminim2.flixcart.com/image/832/832/xif0q/bed/j/y/5/-original-imagpprf9wppvhuy.jpeg?q=70" }} style={{ height: 200, width: 'auto' }} />

                <Text style={{ position: 'absolute', left: 5, top: 5, backgroundColor: 'green', color: "#fff", padding: 5, fontSize: 10 }} >BESTSELLER</Text>

                <Text style={{ position: 'absolute', right: 10, top: 10 }} ><FontAwesome name="heart" size={20} color="#fff" /> </Text>
              </View>


              <View style={{ marginTop: 10, paddingHorizontal: 10 }} >

                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '600' }}>
                    16% Off
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#5e5c5c',
                      fontWeight: '500',
                      marginLeft: 5,
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#5e5c5c',
                    }}>
                    {' '}
                    &#8377;35,999{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '800',
                      marginLeft: 5,
                    }}>
                    {' '}
                    &#8377;29,999{' '}
                  </Text>
                </View>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 10,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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



                <View style={[styles.dFlex, { marginTop: 5, paddingBottom: 5 }]}>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    Free Delivery
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {/* 10 Offers Available{' '} */}
                  </Text>
                </View>
              </View>




            </View>


          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 0, backgroundColor: '#fff' }} >



            <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#ddd', borderBottomWidth: 0.5 }}  >

              <View style={{ position: 'relative', }} >

                <Image source={{ uri: "https://rukminim2.flixcart.com/image/832/832/xif0q/bed/j/y/5/-original-imagpprf9wppvhuy.jpeg?q=70" }} style={{ height: 200, width: 'auto' }} />

                <Text style={{ position: 'absolute', left: 5, top: 5, backgroundColor: 'green', color: "#fff", padding: 5, fontSize: 10 }} >BESTSELLER</Text>

                <Text style={{ position: 'absolute', right: 10, top: 10 }} ><FontAwesome name="heart" size={20} color="#fff" /> </Text>
              </View>


              <View style={{ marginTop: 10, paddingHorizontal: 10 }} >

                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '600' }}>
                    16% Off
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#5e5c5c',
                      fontWeight: '500',
                      marginLeft: 5,
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#5e5c5c',
                    }}>
                    {' '}
                    &#8377;35,999{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '800',
                      marginLeft: 5,
                    }}>
                    {' '}
                    &#8377;29,999{' '}
                  </Text>
                </View>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 10,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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



                <View style={[styles.dFlex, { marginTop: 5, paddingBottom: 5 }]}>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    Free Delivery
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {/* 10 Offers Available{' '} */}
                  </Text>
                </View>
              </View>




            </View>



            <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#ddd', borderBottomWidth: 0.5 }}  >

              <View style={{ position: 'relative', }} >

                <Image source={{ uri: "https://rukminim2.flixcart.com/image/832/832/xif0q/bed/j/y/5/-original-imagpprf9wppvhuy.jpeg?q=70" }} style={{ height: 200, width: 'auto' }} />

                <Text style={{ position: 'absolute', left: 5, top: 5, backgroundColor: 'green', color: "#fff", padding: 5, fontSize: 10 }} >BESTSELLER</Text>

                <Text style={{ position: 'absolute', right: 10, top: 10 }} ><FontAwesome name="heart" size={20} color="#fff" /> </Text>
              </View>


              <View style={{ marginTop: 10, paddingHorizontal: 10 }} >

                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '600' }}>
                    16% Off
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#5e5c5c',
                      fontWeight: '500',
                      marginLeft: 5,
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#5e5c5c',
                    }}>
                    {' '}
                    &#8377;35,999{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '800',
                      marginLeft: 5,
                    }}>
                    {' '}
                    &#8377;29,999{' '}
                  </Text>
                </View>

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 10,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 10,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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



                <View style={[styles.dFlex, { marginTop: 5, paddingBottom: 5 }]}>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    Free Delivery
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: '#36454F', fontWeight: '500' }}>
                    {' '}
                    {/* 10 Offers Available{' '} */}
                  </Text>
                </View>
              </View>




            </View>


          </View>



          {/* ----------------------------------------------------------------- */}


          <View style={[styles.rootCss, { marginTop: 0, borderBottomWidth: 0.5, borderBottomColor: '#ddd' }]}  >

            <View style={[styles.dFlex]}>
              <View>
                <Image
                  source={{
                    uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
                  }}
                  style={{ width: 100, height: 130, objectFit: 'contain' }}
                  resizeMode='contain'
                />


              </View>

              <View style={{ marginLeft: 5 }}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 18, color: '#228b22', fontWeight: '600' }}>
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

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 13,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 5,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View style={[styles.dFlex, { marginTop: 5 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>3 Offers Applied
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                    {' '}
                    10 Offers Available{' '}
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.dFlex, { marginTop: 5 }]}>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                Delivery by Thu Aug 3{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                {'|'}{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                {' '}
                Free Delivery{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                &#8377;40{' '}
              </Text>
            </View>

            <View style={{ marginTop: 10 }} >

              <Text style={{ fontSize: 12, color: '#9f9f9f', fontWeight: '500', borderWidth: 1, marginBottom: 5, borderColor: '#ddd', borderRadius: 4, padding: 5, width: 160 }}>
                8 GB RAM {'|'} 128 GB Storage
              </Text>
              <Text style={{ fontSize: 12, color: '#9f9f9f', fontWeight: '500', borderWidth: 1, borderColor: '#ddd', borderRadius: 4, padding: 5, width: 160 }}>
                8 GB RAM {'|'} 128 GB Storage
              </Text>

            </View>





          </View>





          <View style={[styles.rootCss, { marginTop: 0 }]}  >

            <View style={[styles.dFlex]}>
              <View>
                <Image
                  source={{
                    uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70',
                  }}
                  style={{ width: 100, height: 130, objectFit: 'contain' }}
                  resizeMode='contain'
                />


              </View>

              <View style={{ marginLeft: 5 }}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 13, color: '#36454F', fontWeight: '600' }}>
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
                  style={[styles.dFlex, { marginTop: 10, alignItems: 'center' }]}>
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

                <View style={[styles.dFlex, { marginTop: 10 }]}>
                  <Text
                    style={{ fontSize: 18, color: '#228b22', fontWeight: '600' }}>
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

                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 13,
                    color: '#36454F',
                    fontWeight: '400',
                    marginTop: 5,
                  }}>No Cost EMI from &#8377;4,999 / month
                </Text>

                <View style={[styles.dFlex, { marginTop: 5 }]}>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>3 Offers Applied
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                    {' '}
                    10 Offers Available{' '}
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.dFlex, { marginTop: 5 }]}>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                Delivery by Thu Aug 3{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                {'|'}{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#228b22', fontWeight: '500' }}>
                {' '}
                Free Delivery{' '}
              </Text>
              <Text style={{ fontSize: 12, color: '#36454F', fontWeight: '500' }}>
                {' '}
                &#8377;40{' '}
              </Text>
            </View>

            <View style={{ marginTop: 10 }} >

              <Text style={{ fontSize: 12, color: '#9f9f9f', fontWeight: '500', borderWidth: 1, marginBottom: 5, borderColor: '#ddd', borderRadius: 4, padding: 5, width: 160 }}>
                8 GB RAM {'|'} 128 GB Storage
              </Text>
              <Text style={{ fontSize: 12, color: '#9f9f9f', fontWeight: '500', borderWidth: 1, borderColor: '#ddd', borderRadius: 4, padding: 5, width: 160 }}>
                8 GB RAM {'|'} 128 GB Storage
              </Text>

            </View>





          </View>









          <View style={{ height: 125, width: 50 }} >

          </View>


        </ScrollView>




      </View>


    </>

  )
}



export default ProductsFilterScreen

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
    borderWidth: 1, borderColor: '#ddd', borderRadius: 20, padding: 10, marginRight: 10
  }


})