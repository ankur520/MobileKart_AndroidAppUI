import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import LanguageCard from '../../components/LanguageCard';

const LanguageScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
      //  navigation.navigate('OrdersScreen')
    }, 500);
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.chooseLanguage}>Choose Language</Text>

      <View style={styles.box}>
        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="हिन्दी"
            languageTwo="Hindi"
            imageUrl="require( '../../images/tajMahal.png'  )"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="తెలుగు"
            languageTwo="Telgu"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="தமிழ்"
            languageTwo="Tamil"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="English"
            languageTwo="English"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="বাংলা"
            languageTwo="Bengali"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="मराठी"
            languageTwo="Marathi"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="ಕನ್ನಡ"
            languageTwo="Kannada"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
          <LanguageCard
            navigation={navigation}
            languageOne="اردو"
            languageTwo="Urdu"
            imageUrl="../../images/tajMahal.png"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  chooseLanguage: {
    backgroundColor: '#2873F0',
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    padding: 10,
  },

  root: {
    backgroundColor: '#fff',
  },

  box: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
});
