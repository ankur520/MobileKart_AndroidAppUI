import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async decoded => {
  try {
    const jsonValue = JSON.stringify(decoded);
    await AsyncStorage.setItem('userInfo', jsonValue);
    // console.log(jsonValue)
  } catch (error) {}
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userInfo');
    returnData = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('jsonValue -', returnData);
  } catch (error) {}
};
