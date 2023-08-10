import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useCallback, useState} from 'react';

import {windowWidth, windowHeight} from '../../utils/Dimensions';
import {imageData} from '../../utils/imagesArray';

const BannerCarousel = () => {
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
    <View style={styles.carousel}>
      <FlatList
        data={imageData}
        renderItem={({item}) => (
          <Image
            style={{width: windowWidth, height: 200}}
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
        {imageData.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,

              {
                backgroundColor: index === activeIndex ? '#fff' : 'black',
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

export default BannerCarousel;

const styles = StyleSheet.create({
  carousel: {
    position: 'relative',
    alignItems: 'center',
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#d6d2d2',
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
