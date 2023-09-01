import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native'
import React from 'react'

// icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Utils imports
import {windowWidth, windowHeight} from '../../../utils/Dimensions';

const CategoryLatest = ({catName}) => {
  return (
    <>
    
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
                  {catName} Latest
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
    
    </>
  )
}

export default CategoryLatest

const styles = StyleSheet.create({})