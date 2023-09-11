import {useState} from 'react';
import {
  Image,
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import { SubText } from './SubText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';

import {RadioButton} from 'react-native-paper';

import {windowHeight, windowWidth} from '../../utils/Dimensions';

const BottomPopUp = ({apiData, setaddressId, addressId}) => {
  const [checked, setChecked] = useState();

  // We need to get the height of the phone and use it relatively,
  // This is because height of phones vary

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <Button
        onPress={handleOpenBottomSheet}
        style={{borderWidth: 1, borderColor: '#ddd', borderRadius: 5}}>
        {' '}
        Select Delivery Address{' '}
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}>
        <View style={[styles.bottomSheet, {height: windowHeight * 0.7}]}>
          <View
            style={{
              flex: 0,
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: 600,
                marginBottom: 20,
              }}>
              Select Your Delivery Address
            </Text>

            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={apiData.data.dataArray}
            showsVerticalScrollIndicator={false}
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
                      borderColor:
                        addressId === item.item.id ? '#2874f0' : '#ddd',
                    }}>
                    <View style={{width: '10%'}}>
                      <RadioButton
                        value="first"
                        color="#2874f0"
                        status={
                          addressId === item.item.id ? 'checked' : 'unchecked'
                        }
                        onPress={() => setaddressId(item.item.id)}
                      />
                    </View>

                    <View style={{width: '90%', paddingLeft: 5}}>
                      <View style={[styles.dFlexBetween, {marginBottom: 5}]}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          User Details - {item.item.userId.u_fname}{' '}
                          {item.item.userId.u_lname}
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          Email - {item.item.userId.u_email}
                        </Text>
                      </View>

                      <View style={{marginBottom: 5}}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          Receiver Name - {item.item.reciverName}{' '}
                        </Text>
                      </View>

                      <View style={[styles.dFlexBetween, {marginBottom: 5}]}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          Landmark - {item.item.landmark}
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          City - {item.item.city}
                        </Text>
                      </View>

                      <View style={{marginBottom: 10}}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 600,
                          }}>
                          {' '}
                          Your Address -{item.item.fullAddress}
                        </Text>
                      </View>

                      <TouchableOpacity
                        activeOpacity={checked === item.item.id ? 1 : 0.7}
                        onPress={() => setaddressId(item.item.id)}
                        style={{
                          backgroundColor: '#2874f0',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: 'white',
                            textAlign: 'center',
                          }}>
                          Deliver Here
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default BottomPopUp;

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
