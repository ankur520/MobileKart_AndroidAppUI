import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useCallback} from 'react';

import {Button} from 'react-native-paper';

// icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Utils imports
import {windowWidth, windowHeight} from '../../utils/Dimensions';
import {imageData} from '../../utils/imagesArray';

import {ScrollView} from 'react-native-gesture-handler';
import BannerCarousel from '../../components/BannerCarousel';
import CategoryCarousel from '../../components/CategoryCarousel';

const HomeTab = ({navigation}) => {
  // console.warn(imageData[0])

  return (
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-unfold" size={25} color="#545252" />
        </TouchableOpacity>

        <View style={styles.header_inputBox}>
          <Fontisto
            style={styles.header_searchIcon}
            name="search"
            size={20}
            color="#2873F0"
          />
          <TextInput
            style={styles.header_searchInput}
            placeholder="Search Product"
          />
          <MaterialIcons
            style={styles.header_voiceIcon}
            name="keyboard-voice"
            size={25}
            color="#2873F0"
          />
          <Feather
            style={styles.header_cameraIcon}
            name="camera"
            size={25}
            color="#2873F0"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* CAROUSEL */}

        <BannerCarousel />

        <View style={{backgroundColor: '#fff'}}>
          <CategoryCarousel />

          {/* RECENTLY VIEWED PRODUCTS  */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 0.5,
              borderBottomColor: '#ddd',
            }}>
            <View style={styles.recentViewCategory}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                  marginBottom: 10,
                }}>
                {' '}
                Recently Viewed Products{' '}
              </Text>

              <FlatList
                data={['', '', '', '', '']}
                renderItem={({item}) => (
                  <>
                    <View style={styles.categoryBox}>
                      <Image
                        style={{width: 90, height: 90}}
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

          {/* SUGGESTED FOR YOU  */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 10,
            }}>
            <View style={styles.recentViewCategory}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {' '}
                  Suggested for You
                </Text>

                <Text>
                  {' '}
                  <AntDesign
                    name="rightcircle"
                    size={20}
                    color="#00008B"
                  />{' '}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 40,
                }}>
                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      4.7 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>

                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      2.7 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>

                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      1 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 40,
                  marginTop: 10,
                }}>
                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      4.7 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>

                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      2.7 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>

                <View
                  style={[
                    styles.categoryBox,
                    {alignItems: 'flex-start', marginRight: 10, width: '33%'},
                  ]}>
                  <View style={{position: 'relative', width: '100%'}}>
                    <Image
                      style={{width: '100%', height: 130, objectFit: 'contain'}}
                      resizeMode="contain"
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                      1 <FontAwesome name="star" size={10} color="#fff" />
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Samsung Z Fold dafsafdsafsdafasf
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontWeight: '400',
                      }}>
                      {' '}
                      599{' '}
                    </Text>{' '}
                    <Text> &#8377;219</Text>
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Free Delivery
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Samsung ON Latest   */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 10,
            }}>
            <ImageBackground
              source={{
                uri: 'https://st2.depositphotos.com/1023213/6867/i/450/depositphotos_68677431-Grass-Background-Texture.jpg',
              }}
              // source={ require("../../images/greenGradientBackground.png") }
              style={{width: '100%', height: 300}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {' '}
                  Samsung Latest
                </Text>

                <Text>
                  <AntDesign name="rightcircle" size={20} color="#fff" />
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth,
                  paddingHorizontal: 10,
                }}>
                <FlatList
                  data={['', '', '', '', '', '']}
                  renderItem={({item}) => (
                    <>
                      <View
                        style={[
                          styles.categoryBox,
                          {
                            alignItems: 'flex-start',
                            marginRight: 10,
                            width: 200,
                            backgroundColor: '#fff',
                          },
                        ]}>
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 150,
                              objectFit: 'cover',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://img.global.news.samsung.com/in/wp-content/uploads/2021/09/9609-F22-Flipkart-Banner_KV_3000x2000.jpg',
                            }}
                          />

                          <Text
                            style={{
                              backgroundColor: '#fff',
                              fontSize: 10,
                              color: 'blue',
                              position: 'absolute',
                              bottom: 0,
                              left: '30%',
                              padding: 5,
                            }}>
                            On Mobile Kart
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Galaxy F42 5G
                        </Text>

                        <Text
                          style={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 5,
                          }}>
                          Up to 65% Off
                        </Text>
                      </View>
                    </>
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}></FlatList>
              </View>
            </ImageBackground>
          </View>

          {/* SAMSUNG SUGGESTED  */}

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
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  {' '}
                  Samsung Suggest You
                </Text>

                <Text>
                  {' '}
                  <AntDesign
                    name="rightcircle"
                    size={20}
                    color="#00008B"
                  />{' '}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 20,
                }}>
                <FlatList
                  data={['', '', '', '', '', '', '', '', '', '']}
                  renderItem={({item}) => (
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
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'contain',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                            4.7{' '}
                            <FontAwesome name="star" size={10} color="#fff" />
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Samsung Z Fold dafsafdsafsdafasf
                        </Text>

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
                            {' '}
                            599{' '}
                          </Text>{' '}
                          <Text> &#8377;219</Text>
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          Free Delivery
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

          {/* APPLE ON Latest   */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 10,
            }}>
            <ImageBackground
              source={{
                uri: 'https://st2.depositphotos.com/1023213/6867/i/450/depositphotos_68677431-Grass-Background-Texture.jpg',
              }}
              // source={ require("../../images/greenGradientBackground.png") }
              style={{width: '100%', height: 300}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {' '}
                  Apple Latest
                </Text>

                <Text>
                  <AntDesign name="rightcircle" size={20} color="#fff" />
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth,
                  paddingHorizontal: 10,
                }}>
                <FlatList
                  data={['', '', '', '', '', '']}
                  renderItem={({item}) => (
                    <>
                      <View
                        style={[
                          styles.categoryBox,
                          {
                            alignItems: 'flex-start',
                            marginRight: 10,
                            width: 200,
                            backgroundColor: '#fff',
                          },
                        ]}>
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 150,
                              objectFit: 'cover',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://firmatec.co.za/wp-content/uploads/2022/11/C1017_Generic-Creative_Apple-Products_Social-Media-Reseller-iPhone-Facebook-_-Linkedin-1200x628-1.png',
                            }}
                          />

                          <Text
                            style={{
                              backgroundColor: '#fff',
                              fontSize: 10,
                              color: 'blue',
                              position: 'absolute',
                              bottom: 0,
                              left: '30%',
                              padding: 5,
                            }}>
                            On Mobile Kart
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Iphone 14 Pro Max
                        </Text>

                        <Text
                          style={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 5,
                          }}>
                          Up to 15% Off
                        </Text>
                      </View>
                    </>
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}></FlatList>
              </View>
            </ImageBackground>
          </View>

          {/* Apple SUGGESTED  */}

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
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  {' '}
                  Apple Suggests You
                </Text>

                <Text>
                  {' '}
                  <AntDesign
                    name="rightcircle"
                    size={20}
                    color="#00008B"
                  />{' '}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 20,
                }}>
                <FlatList
                  data={['', '', '', '', '', '', '', '', '', '']}
                  renderItem={({item}) => (
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
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'contain',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                            4.7{' '}
                            <FontAwesome name="star" size={10} color="#fff" />
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Samsung Z Fold dafsafdsafsdafasf
                        </Text>

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
                            {' '}
                            599{' '}
                          </Text>{' '}
                          <Text> &#8377;219</Text>
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          Free Delivery
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

          {/* NOKIA ON Latest   */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 10,
            }}>
            <ImageBackground
              source={{
                uri: 'https://st2.depositphotos.com/1023213/6867/i/450/depositphotos_68677431-Grass-Background-Texture.jpg',
              }}
              // source={ require("../../images/greenGradientBackground.png") }
              style={{width: '100%', height: 300}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {' '}
                  Nokia Latest
                </Text>

                <Text>
                  <AntDesign name="rightcircle" size={20} color="#fff" />
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth,
                  paddingHorizontal: 10,
                }}>
                <FlatList
                  data={['', '', '', '', '', '']}
                  renderItem={({item}) => (
                    <>
                      <View
                        style={[
                          styles.categoryBox,
                          {
                            alignItems: 'flex-start',
                            marginRight: 10,
                            width: 200,
                            backgroundColor: '#fff',
                          },
                        ]}>
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 150,
                              objectFit: 'cover',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://www.nokiacamp.com/wp-content/uploads/2018/09/banner-nokia-6.1-plus-1.jpg',
                            }}
                          />

                          <Text
                            style={{
                              backgroundColor: '#fff',
                              fontSize: 10,
                              color: 'blue',
                              position: 'absolute',
                              bottom: 0,
                              left: '30%',
                              padding: 5,
                            }}>
                            On Mobile Kart
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Nokia
                        </Text>

                        <Text
                          style={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 5,
                          }}>
                          Up to 25% Off
                        </Text>
                      </View>
                    </>
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}></FlatList>
              </View>
            </ImageBackground>
          </View>

          {/* NOKIA SUGGESTED  */}

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
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  {' '}
                  Nokia Suggest You
                </Text>

                <Text>
                  {' '}
                  <AntDesign
                    name="rightcircle"
                    size={20}
                    color="#00008B"
                  />{' '}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 20,
                }}>
                <FlatList
                  data={['', '', '', '', '', '', '', '', '', '']}
                  renderItem={({item}) => (
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
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'contain',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                            4.7{' '}
                            <FontAwesome name="star" size={10} color="#fff" />
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Samsung Z Fold dafsafdsafsdafasf
                        </Text>

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
                            {' '}
                            599{' '}
                          </Text>{' '}
                          <Text> &#8377;219</Text>
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          Free Delivery
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

          {/* XIAOMI ON Latest   */}

          <View
            style={{
              // elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 10,
            }}>
            <ImageBackground
              source={{
                uri: 'https://st2.depositphotos.com/1023213/6867/i/450/depositphotos_68677431-Grass-Background-Texture.jpg',
              }}
              // source={ require("../../images/greenGradientBackground.png") }
              style={{width: '100%', height: 300}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                  {' '}
                  Xiaomi Latest
                </Text>

                <Text>
                  <AntDesign name="rightcircle" size={20} color="#fff" />
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth,
                  paddingHorizontal: 10,
                }}>
                <FlatList
                  data={['', '', '', '', '', '']}
                  renderItem={({item}) => (
                    <>
                      <View
                        style={[
                          styles.categoryBox,
                          {
                            alignItems: 'flex-start',
                            marginRight: 10,
                            width: 200,
                            backgroundColor: '#fff',
                          },
                        ]}>
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 150,
                              objectFit: 'cover',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://furper.com/cdn/shop/products/xiaomi-13-ultra-smart-phones-xiaomi-936185_large.jpg?v=1684750483',
                            }}
                          />

                          <Text
                            style={{
                              backgroundColor: '#fff',
                              fontSize: 10,
                              color: 'blue',
                              position: 'absolute',
                              bottom: 0,
                              left: '30%',
                              padding: 5,
                            }}>
                            On Mobile Kart
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Xiaomi
                        </Text>

                        <Text
                          style={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '700',
                            marginTop: 5,
                          }}>
                          Up to 5% Off
                        </Text>
                      </View>
                    </>
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}></FlatList>
              </View>
            </ImageBackground>
          </View>

          {/* Xiaomi */}

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
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  {' '}
                  Xiaomi Suggest You
                </Text>

                <Text>
                  {' '}
                  <AntDesign
                    name="rightcircle"
                    size={20}
                    color="#00008B"
                  />{' '}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: windowWidth - 20,
                }}>
                <FlatList
                  data={['', '', '', '', '', '', '', '', '', '']}
                  renderItem={({item}) => (
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
                        <View style={{position: 'relative', width: '100%'}}>
                          <Image
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'contain',
                            }}
                            resizeMode="contain"
                            source={{
                              uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
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
                            4.7{' '}
                            <FontAwesome name="star" size={10} color="#fff" />
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '400',
                            marginTop: 5,
                          }}>
                          Samsung Z Fold dafsafdsafsdafasf
                        </Text>

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
                            {' '}
                            599{' '}
                          </Text>{' '}
                          <Text> &#8377;219</Text>
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: '500',
                          }}>
                          Free Delivery
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
        </View>
      </ScrollView>
    </>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  // HEADER CSS
  header: {
    width: windowWidth,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: '#fff',
  },

  header_inputBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },

  header_searchIcon: {
    position: 'absolute',
    left: 30,
    color: '#b4b5b9',
  },

  header_searchInput: {
    width: '85%',
    paddingLeft: 40,
    paddingRight: 80,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
    height: 40,
  },

  header_voiceIcon: {
    position: 'absolute',
    right: 80,
    color: '#b4b5b9',
  },

  header_cameraIcon: {
    position: 'absolute',
    right: 45,
    color: '#b4b5b9',
  },

  // other css

  recentViewCategory: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  categoryBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 100,
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 5,
  },
});
