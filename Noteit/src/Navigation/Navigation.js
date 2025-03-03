import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUpScreen from '../Screens/SignUpScreen';

import ProfileScreen from '../Screens/ProfileScreen';
import MessageScreen from '../Screens/MessageScreen';
import MovementScreen from '../Screens/MovementScreen';
import SettingScreen from '../Screens/SettingScreen';
import CustomDrawer from '../Components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () => {
    return (

        <Drawer.Navigator
            drawerContent={props => <CustomDrawer{...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontFamily: 'Robot-Medium',
                    fontSize: 15,
                },
            }}>

            {/* <Drawer.Screen name="SignInScreen" component={SignInScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name="login" size={22} color={color} />

                        ),
                    }}
                /> */}
            <Drawer.Screen name="HomeScreen" component={TabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />

                    ),
                }}
            />
            <Drawer.Screen name="ProfileScreen" component={TabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />

                    ),
                }}
            />
            <Drawer.Screen name="MessageScreen" component={MessageScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />

                    ),
                }}
            />
            <Drawer.Screen name="MovementScreen" component={MovementScreen}

                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" size={22} color={color} />

                    ),
                }}
            />
            <Drawer.Screen name="SettingScreen" component={TabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />

                    ),
                }}
            />
            {/* <Drawer.Screen name="SignUpScreen" component={SignUpScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />

                    ),
                }}
            /> */}


            {/* <Drawer.Screen name="SignUpScreen" component={SignUpScreen} /> */}
            {/* <Drawer.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} /> */}
            {/* <Drawer.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} /> */}
            {/* <Drawer.Screen name="NewPasswordScreen" component={NewPasswordScreen} /> */}

            {/* <Drawer.Screen name="Setting" component={Setting} /> */}
        </Drawer.Navigator>


    )
}

export default Navigation

const styles = StyleSheet.create({})