import {useState, useEffect, useContext} from 'react';
import {
  Image,
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';

import {RadioButton} from 'react-native-paper';

import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {allAddressAsync} from '../../Redux/slice/AllUserAddressSlice';
import IsUserLoggedContext from '../../context/isLoggedInContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AllAddressScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const loggedDataContext = useContext(IsUserLoggedContext);
  const [checked, setChecked] = useState();

  const getAddressFromRedux = useSelector(state => state.allUserAddress);

  useEffect(() => {
    if (loggedDataContext.isUserLoggedIn) {
      // console.log(loggedDataContext.userInfo.id)
      dispatch(allAddressAsync(loggedDataContext.userInfo.id));
    }
  }, []);

  return (
    <>
      {/* HEADER  */}
      <View
        style={{
          backgroundColor: '#2873F0',
          height: 60,
          width: windowWidth,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          position: 'relative',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{marginRight: 10}}
            name="arrowleft"
            size={30}
            color="#fff"
          />

          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            My Addresses
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Fontisto
            style={{marginRight: 10}}
            name="search"
            size={20}
            color="#fff"
          />

          <AntDesign
            name="shoppingcart"
            size={20}
            color="#fff"
            onPress={() => navigation.navigate('CartTab')}
          />
        </View>
      </View>

      <ScrollView
        style={{backgroundColor: '#F1F2F6', width: windowWidth, padding: 10}}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={getAddressFromRedux.data.dataArray}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={(item, index) => {
            return (
              <View style={{width: '100%'}} key={index}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 8,
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: '#ddd',
                  }}>
                  <View style={{width: '100%', paddingLeft: 5}}>
                    <View style={[styles.dFlexBetween, {marginBottom: 5}]}>
                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        User Details - {item.item.userId.u_fname}{' '}
                        {item.item.userId.u_lname}
                      </Text>
                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        Email - {item.item.userId.u_email}
                      </Text>
                    </View>

                    <View style={{marginBottom: 5}}>
                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        Receiver Name - {item.item.reciverName}{' '}
                      </Text>
                    </View>

                    <View style={[styles.dFlexBetween, {marginBottom: 5}]}>
                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        Landmark - {item.item.landmark}
                      </Text>

                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        City - {item.item.city}
                      </Text>
                    </View>

                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{fontSize: 10, color: 'black', fontWeight: 600}}>
                        {' '}
                        Your Address -{item.item.fullAddress}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default AllAddressScreen;

// The StyleSheet is imported from React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'black',
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
