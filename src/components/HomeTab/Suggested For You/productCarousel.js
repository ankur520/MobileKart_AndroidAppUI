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

import {
  calculatePrice,
  calculateDelivery,
  formatProductName,
} from '../../../utils/calculateFunctions';

// Utils imports
import {windowWidth, windowHeight} from '../../../utils/Dimensions';

const productCarousel = ({apiData}) => {
  // console.log( "productCarousel ",  apiData.data.getAllProducts  );
  // console.log(apiData.isLoader);
  // console.log(apiData.isError);

  return (
    <>
      <View
        style={{
          width: windowWidth - 20,
          marginBottom: 10,
        }}>
        <FlatList
          data={apiData.data.getAllProducts}
          renderItem={({item, index}) => {
            if (item.setFeatured === true && item.recycleBin === false) {
              return (
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
                          height: 120,
                          objectFit: 'contain',
                        }}
                        resizeMode="contain"
                        source={{
                          uri: `${item.image1}`,
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
                        4.7
                        <FontAwesome name="star" size={10} color="#fff" />
                      </Text>
                    </View>

                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 10,
                        color: 'black',
                        fontWeight: '400',
                        marginTop: 5,
                      }}>
                      {item.name.substring(0, 25) + '...'}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          fontWeight: '400',
                        }}>
                        {item.mrp}
                      </Text>
                      <Text>
                        &#8377; {calculatePrice(item.mrp, item.discountPercent)}
                      </Text>
                    </Text>

                    <Text
                      style={{
                        fontSize: 10,
                        color: 'black',
                        fontWeight: '500',
                      }}>
                      {calculateDelivery(
                        item.shippingStatus,
                        item.shippingAmount,
                      )}{' '}
                      &#8377;
                    </Text>
                  </View>
                </>
              );
            }
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default productCarousel;

const styles = StyleSheet.create({
  categoryBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 500,
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 5,
  },
});
