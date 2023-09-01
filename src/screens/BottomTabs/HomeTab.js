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
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

// icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Utils imports
import {windowWidth, windowHeight} from '../../utils/Dimensions';
import {imageData} from '../../utils/imagesArray';

// components imports
import CategorySuggestBox from '../../components/HomeTab/CategorySuggestsBox';
import CategoryLatest from '../../components/HomeTab/Category Latest';
import SuggestedForYou from '../../components/HomeTab/Suggested For You';
import BannerCarousel from '../../components/BannerCarousel';
import CategoryCarousel from '../../components/HomeTab/CategoryCarousel';

// redux

import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from '../../Redux/slice/AllProductsSlice';

const HomeTab = (props) => {

  const dispatch = useDispatch();

  const counter = useSelector( state => state.counter )

  const getProductsFromRedux = useSelector( state => state.allProducts )

// console.log("counter - " , counter )
  // console.log("allProducts - ",  getProductsFromRedux)

  useEffect(() => {
    
    dispatch( fetchAllProducts() )

  }, [])

  // console.log("props -" , props)
  

  return (
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => props.navigation.openDrawer()}>
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

      {/* <View>
          <Text>-------------------------------</Text>
          <Text> {count} </Text>
          <Text>-------------------------------</Text>
          <TouchableOpacity>
          <Text onPress={ () => dispatch(increment()) } >Increase </Text>
          <Text  onPress={ () => dispatch(decrement()) }  >Decdfgdsfgrease </Text>
          </TouchableOpacity>
        
        </View>  */}

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

          <SuggestedForYou apiData={getProductsFromRedux} navigation={props.navigation} />

          <CategoryLatest catName="Apple" />

          <CategorySuggestBox catName="Apple" apiData={getProductsFromRedux} />

          <CategorySuggestBox catName="Nokia" apiData={getProductsFromRedux} />
          
          <CategorySuggestBox
            catName="Samsung"
            apiData={getProductsFromRedux}
          /> 

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
