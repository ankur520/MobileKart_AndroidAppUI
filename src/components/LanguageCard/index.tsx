import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';

type LanguageCardProps = {
  languageOne: string;
  languageTwo: string;
  imageUrl: string;
  navigation: object;
};

const LanguageCard = (props: LanguageCardProps) => {
  // console.log(props)

  const [checked, setChecked] = React.useState('');

  return (
    <View style={styles.card}>
      <View style={styles.leftSide}>
        <View>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => props.navigation.navigate('WelcomeScreen')}
          />
        </View>

        <View style={styles.leftSide_rightBox}>
          <Text style={styles.leftSide_rightBox_First}>
            {' '}
            {props.languageOne}{' '}
          </Text>
          <Text style={styles.leftSide_rightBox_Second}>
            {' '}
            {props.languageTwo}{' '}
          </Text>
        </View>

        {/* require("../../images/tajMahal.png") */}
      </View>

      <View style={styles.rightSide}>
        <Image
          style={styles.rightSide_Img}
          source={require('../../images/tajMahal.png')}
        />
      </View>
    </View>
  );
};

export default LanguageCard;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 70,
    marginBottom: 15,
  },

  leftSide: {
    display: 'flex',
    flexDirection: 'row',
  },

  leftSide_rightBox: {
    marginLeft: 20,
  },

  leftSide_rightBox_First: {
    fontWeight: '900',
    fontSize: 25,
    fontStyle: 'normal',
    color: 'black',
  },

  leftSide_rightBox_Second: {
    fontSize: 15,
    color: 'black',
  },

  rightSide: {},

  rightSide_Img: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    marginTop: -27,
  },
});
