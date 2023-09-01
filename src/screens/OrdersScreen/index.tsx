import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// other imports
import { windowWidth } from '../../utils/Dimensions';
import OrdersCard from '../../components/OrdersCard';
//   OrdersScreen
const OrdersScreen = ({ navigation }) => {
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
                <AntDesign

                    onPress={() => navigation.navigate("WelcomeScreen")}

                    style={{ marginRight: 10 }}
                    name="arrowleft"
                    size={30}
                    color="#fff"
                />

                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                    }}>
                    My Orders
                </Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    <Fontisto
                        style={{ marginRight: 10 }}
                        name="search"
                        size={20}
                        color="#fff"
                    />

                    <AntDesign name="shoppingcart" size={20} color="#fff" />
                </View>
            </View>

            <View style={[styles.dFlexBetween, { justifyContent: "space-evenly", paddingHorizontal: 10, paddingVertical: 20, width: windowWidth, backgroundColor: "#ffffff", }]}   >

                <View>

                    <View style={styles.header_inputBox}>
                        <Fontisto
                            style={styles.header_searchIcon}
                            name="search"
                            size={20}
                            color="#2873F0"
                        />
                        <TextInput
                            style={styles.header_searchInput}
                            placeholder="Search your order here"
                        />

                    </View>


                </View>

                <View style={[styles.dFlex, {}]} >
                    <Ionicons
                        style={{ marginRight: 5 }}
                        name="filter"
                        size={20}
                        color="black"
                    />

                    <Text
                        style={{
                            color: 'black',
                            fontSize: 15,
                            marginRight: 20
                        }}>
                        Filters
                    </Text>

                </View>

            </View>

            {/* SCROLL VIEW STARTS  */}

            <ScrollView style={{ backgroundColor: '#F1F2F6', width: windowWidth }} showsVerticalScrollIndicator={false} >


                <View style={[styles.rootCss, { marginTop: 10, elevation: 3, width: windowWidth, backgroundColor: "#ffffff", }]}  >

                    <OrdersCard />

                    <OrdersCard />


                    <OrdersCard />

                    <OrdersCard />

                    <OrdersCard />

                    <OrdersCard />

                    <OrdersCard />


                </View>



            </ScrollView>


        </>
    );
};



export default OrdersScreen;

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



    header_inputBox: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },

    header_searchIcon: {
        position: 'absolute',
        left: 30,
        color: '#b4b5b9',
    },

    header_searchInput: {
        width: '80%',
        paddingLeft: 40,
        paddingRight: 80,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        color: 'black',
        height: 50,
    },

    header_voiceIcon: {
        position: 'absolute',
        right: 80,
        color: '#b4b5b9',
    },

    header_cameraIcon: {
        position: 'absolute',
        right: 45,
        color: '#b4b5b9',
    },



});
