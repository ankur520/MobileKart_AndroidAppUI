import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SideBar = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F1F2F6'}}>
      <View
        style={[
          styles.dFlex,
          {
            alignItems: 'flex-start',
            flexDirection: 'column',
            backgroundColor: '#fff',
            padding: 20,
            marginTop: '20%',
          },
        ]}>
        <View
          style={[
            ,
            {display: 'flex', flexDirection: 'column', marginBottom: 20},
          ]}>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: '400',
              marginBottom: 10,
            }}>
            Developer Name -
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
              marginBottom: 5,
            }}>
            Ajay Pratap Singh
          </Text>

          <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
            ( Full Stack Developer )
          </Text>
        </View>

        <View
          style={[
            ,
            {display: 'flex', flexDirection: 'column', marginBottom: 20},
          ]}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
            Email -
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            apsinghjobs@gmail.com
          </Text>
        </View>

        <View
          style={[
            ,
            {display: 'flex', flexDirection: 'column', marginBottom: 20},
          ]}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
            website -
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            ajaypratapsingh.netlify.com
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            sintechworks.com
          </Text>
        </View>

        <View
          style={[
            ,
            {display: 'flex', flexDirection: 'column', marginBottom: 20},
          ]}>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: '400',
              marginBottom: 10,
            }}>
            Contact us For any kind of Works -
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - WebApp Development
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - Android Development
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - IOS Development
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - Website Designing
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - Rest Apis Development
          </Text>

          <Text style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
            - Mobile App Ui Development
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SideBar;

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
