import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from '../Screen/Menu';
import HomeScreen from '../Screen/HomeScreen';
import Menu from '../Screen/Menu';
import Signin from '../Screen/Signin';
import Signup from '../Screen/Signup';

import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text } from 'react-native';
import Signup from '../Screen/Signup';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                /*   drawerActiveBackgroundColor: "#5EA33A",
                  drawerActiveTintColor: "#fff", */
                drawerContentContainerStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    marginHorizontal: 20
                },
                headerShown: false,
            }}>
            <Drawer.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: 'Menu ',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/menu.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/menu.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Signin"
                component={Signin}
                options={{
                    title: 'Signin',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/menu.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Signup"
                component={Signup}
                options={{
                    title: 'sIgnup',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/cart.png')}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator