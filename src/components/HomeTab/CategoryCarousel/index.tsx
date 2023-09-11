import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

import {CatImagesArray} from '../../../utils/imagesArray';
import {Link} from '@react-navigation/native';

const categoryCarousel = () => {
  return (
    <FlatList
      data={CatImagesArray}
      renderItem={({item}) => (
        <>
          <Link
            to={{
              screen: 'ProductsFilterScreen',
              params: {
                category: `${item.catName}`,
                subCategory: `${item.subCatName}`,
              },
            }}>
            <View style={styles.boxRoot}>
              <View style={styles.imageBox}>
                <Image style={styles.CatImage} source={{uri: item.image}} />
              </View>

              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                {' '}
                {item.subCatName}{' '}
              </Text>
            </View>
          </Link>
        </>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default categoryCarousel;

const styles = StyleSheet.create({
  boxRoot: {
    paddingVertical: 20,
  },

  imageBox: {
    backgroundColor: '#F1F6FC',
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
    resizeMode: 'contain',
    marginTop: 10,
    objectFit: 'cover',
  },
});
