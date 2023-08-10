import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/Dimensions';
import {Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationsTabs = () => {
  return (
    <View style={{backgroundColor: '#F1F2F6', width: windowWidth}}>
      <View style={styles.rootCss}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Notifications
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ADDRESS BOX */}

        <View
          style={[
            styles.dFlex,
            styles.rootCss,
            {borderBottomWidth: 1, borderBottomColor: '#ddd'},
          ]}>
          <Button
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              borderRadius: 30,
              color: '#fff',
            }}>
            ALL
          </Button>

          <Button
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 30,
              marginLeft: 10,
            }}>
            Reminders
          </Button>
        </View>

        <View
          style={[
            styles.dFlex,
            styles.rootCss,
            {
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            },
          ]}>
          <View>
            <View style={[styles.dFlex, {}]}>
              <View>
                <MaterialIcons name="pending" size={25} color="blue" />
              </View>

              <View style={{marginLeft: 10, width: '70%'}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#5e5c5c',
                    fontWeight: '800',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  Shop Now
                </Text>

                <Text
                  numberOfLines={3}
                  style={{
                    fontSize: 12,
                    color: '#5e5c5c',
                    fontWeight: '400',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  is waiting in your cart. our most popular product s go fast -
                  don't miss!
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    color: '#5e5c5c',
                    fontWeight: '300',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  19 hours ago
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Image
              style={{width: 70, height: 70, objectFit: 'contain'}}
              resizeMode="contain"
              source={{
                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
              }}
            />
          </View>
        </View>

        <View
          style={[
            styles.dFlex,
            styles.rootCss,
            {
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            },
          ]}>
          <View>
            <View style={[styles.dFlex, {}]}>
              <View>
                <MaterialIcons name="pending" size={25} color="blue" />
              </View>

              <View style={{marginLeft: 10, width: '70%'}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#5e5c5c',
                    fontWeight: '800',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  Shop Now
                </Text>

                <Text
                  numberOfLines={3}
                  style={{
                    fontSize: 12,
                    color: '#5e5c5c',
                    fontWeight: '400',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  is waiting in your cart. our most popular product s go fast -
                  don't miss!
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    color: '#5e5c5c',
                    fontWeight: '300',
                    textDecorationColor: '#5e5c5c',
                  }}>
                  19 hours ago
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Image
              style={{width: 70, height: 70, objectFit: 'contain'}}
              resizeMode="contain"
              source={{
                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationsTabs;

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
});
