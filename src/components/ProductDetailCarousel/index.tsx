import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useCallback, useState} from 'react';

import {windowWidth, windowHeight} from '../../utils/Dimensions';
import {productImagesArray} from '../../utils/imagesArray';

const ProductDetailCarousel = () => {
  const [activeIndex, setactiveIndex] = useState(0);

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactiveIndex(viewableItems[0].index || 0);
    }

    if (activeIndex == viewableItems.length) {
      setactiveIndex(0);
    }

    // console.log(viewableItems);
  }, []);

  return (
    <View style={[styles.carousel, {marginTop: -20}]}>
      <FlatList
        data={productImagesArray}
        renderItem={({item}) => (
          <Image
            resizeMode="contain"
            style={{width: windowWidth, height: 500, objectFit: 'contain'}}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        // will call when items changed
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {productImagesArray.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,

              {
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
              },
              {
                width: index == activeIndex ? 15 : 10,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductDetailCarousel;

const styles = StyleSheet.create({
  carousel: {
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    borderColor: '#c9c9c9',
    // margin: 10,
    padding: 5,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    marginRight: 5,
  },
});
