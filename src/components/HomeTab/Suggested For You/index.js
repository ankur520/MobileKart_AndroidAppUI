import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

// icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Button, ActivityIndicator, MD2Colors} from 'react-native-paper';

// Utils imports
import {windowWidth, windowHeight} from '../../../utils/Dimensions';

import ProductCarousel from './productCarousel';

const SuggestedForYou = ({apiData, navigation}) => {
  // console.log("props - " , navigation)
  return (
    <>
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
                Suggested For You
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

            <Text onPress={() => navigation.navigate('ProductsFilterScreen')}>
              {' '}
              <AntDesign name="rightcircle" size={20} color="#00008B" />{' '}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 10,
              color: 'black',
              fontWeight: '400',
            }}>
            {apiData.isError ? 'Something Went Wrong' : ''}
          </Text>
          <ProductCarousel apiData={apiData} />
          <ProductCarousel apiData={apiData} />
        </View>
      </View>
    </>
  );
};

export default SuggestedForYou;

const styles = StyleSheet.create({
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
