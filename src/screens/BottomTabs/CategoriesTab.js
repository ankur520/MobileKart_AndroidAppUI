import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';

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

// other imports
import {windowWidth} from '../../utils/Dimensions';
import {Link} from '@react-navigation/native';

const CategoriesTabs = () => {
  return (
    <>
      {/* HEADER  */}
      <View
        style={{
          backgroundColor: '#2873F0',
          height: 60,
          width: windowWidth,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          position: 'relative',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
          }}>
          All Categories
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Fontisto
            style={{marginRight: 10}}
            name="search"
            size={20}
            color="#fff"
          />

          <MaterialIcons
            style={{}}
            name="keyboard-voice"
            size={23}
            color="#fff"
          />
        </View>
      </View>

      {/* SCROLL VIEW STARTS  */}

      <ScrollView
        style={{backgroundColor: '#fff', width: windowWidth}}
        showsVerticalScrollIndicator={false}>
        {/* Category SEction */}
        <View>
          <View style={{borderBottomWidth: 0.5, borderColor: '#ddd'}}>
            <View
              style={{
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Apple',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={[styles.CatImage, {objectFit: 'contain'}]}
                      resizeMode="contain"
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUX5Row2QfumC7m_1dDV0zsjMPHhkkVPfYg&usqp=CAU',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Apple{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Samsung',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Samsung{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Nokia',
                  },
                }}></Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Apple',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://cdn.wallpapersafari.com/61/77/rmb5aB.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Nokia{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Xiaomi',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/020/927/146/original/xiaomi-brand-logo-phone-symbol-with-name-white-design-chinese-mobile-illustration-with-orange-background-free-vector.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Xiaomi{' '}
                  </Text>
                </View>
              </Link>
            </View>
          </View>

          <View style={{borderBottomWidth: 0.5, borderColor: '#ddd'}}>
            <View
              style={{
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Motorola',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/020/927/440/original/motorola-brand-logo-phone-symbol-with-name-white-design-usa-mobile-illustration-with-black-background-free-vector.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Motorolla{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Vivo',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-29606,msid-75741298/vivo-agencies.jpg?from=mdr',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Vivo{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Lg',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://img.freepik.com/premium-vector/swoosh-letter-lg-logo-design-business-company-identity-water-wave-lg-logo-with-modern-trendy_754537-786.jpg?w=2000',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    LG{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Micromax',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://1000logos.net/wp-content/uploads/2019/12/Micromax-Logo.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Micromax{' '}
                  </Text>
                </View>
              </Link>
            </View>
          </View>

          <View style={{borderBottomWidth: 0.5, borderColor: '#ddd'}}>
            <View
              style={{
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Jio',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/020/336/272/original/jio-logo-jio-icon-free-free-vector.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Jio Phone{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Blackberry',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Blackberry-logo-vector_c%C3%B3pia.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Black Berry{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Oneplus',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://assets.mspimages.in/gear/wp-content/uploads/2020/03/OnePlus-New-Logo.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    One Plus{' '}
                  </Text>
                </View>
              </Link>

              <Link
                to={{
                  screen: 'ProductsFilterScreen',
                  params: {
                    category: 'Mobiles',
                    subCategory: 'Oppo',
                  },
                }}>
                <View style={{paddingVertical: 20, width: '25%'}}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.CatImage}
                      resizeMode="contain"
                      source={{
                        uri: 'https://wallpaperaccess.com/full/4392106.jpg',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Oppo{' '}
                  </Text>
                </View>
              </Link>
            </View>
          </View>
        </View>

        {/* Trending Stores */}

        {/* <View style={{}} >

<View style={{flexDirection: 'row', alignItems: 'center'}}>
<View>
<Text style={{ paddingLeft: 10, textAlign: 'center', fontSize: 20, color: 'black' }}>Trending Stores</Text>
</View>
<View style={{ marginLeft: 20, flex: 1, height: 1, backgroundColor: '#ddd'}} />
</View>


<View style={{width: windowWidth ,  paddingHorizontal: 10 }} > 


<View style={{ width: '50%' , borderRadius: 20 }} >

<ImageBackground
style={{ height : 200 , paddingHorizontal: 10,  paddingTop: 5  }}
source={{uri : "https://miro.medium.com/v2/resize:fit:1400/1*ufVo932TWZyk5ZYFp7ukcw.jpeg"}}
>

<Text style={{ fontSize: 20, color: 'black' ,  fontWeight: '600' }} >Flipkart Green  <Entypo  style={{  textAlign: 'center' }}  name="chevron-small-right" size={20} color = "black" />  </Text>
<Text style={{ fontSize: 15, color: 'black' ,  fontWeight: '300' }}  >The Sustainable Store </Text>

</ImageBackground>

</View>

</View>


</View> */}

        {/* Recently Viewed Stores */}

        <View>
          <View style={styles.recentViewCategory}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
                marginBottom: 10,
                //  paddingHorizontal :10 ,
              }}>
              {' '}
              Recently Viewed Products{' '}
            </Text>

            <View style={{paddingHorizontal: 10}}>
              <FlatList
                data={['', '', '', '', '']}
                renderItem={({item}) => (
                  <>
                    <View
                      style={[
                        styles.categoryBox,
                        {
                          borderBottomWidth: 0.5,
                          borderRightWidth: 0.5,
                          borderColor: '#ddd',

                          marginRight: 10,

                          paddingBottom: 10,

                          // shadowColor: '#000',
                          // shadowOffset: {width: 1, height: 1},

                          // shadowOpacity: 0.4,
                          // shadowRadius: 3,
                          // elevation: 4,
                        },
                      ]}>
                      <Image
                        style={{width: 150, height: 150, objectFit: 'contain'}}
                        resizeMode="contain"
                        source={{
                          uri: 'https://m.media-amazon.com/images/I/71Vd1+ZnY-L._SX679_.jpg',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'black',
                          fontWeight: '500',
                          textAlign: 'center',
                        }}>
                        Samsung Z Fold
                      </Text>
                    </View>
                  </>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoriesTabs;

const styles = StyleSheet.create({
  imageBox: {
    backgroundColor: '#D7EEFF',
    width: 80,
    height: 80,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginRight: 10,
  },

  CatImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    objectFit: 'contain',
  },
});
