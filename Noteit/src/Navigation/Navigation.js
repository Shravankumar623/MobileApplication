import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from '../screens/ScinInScreen/SignInScreen';
import SignUpScreen from '../screens/SingnUpScreen/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen/VerifyEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import BottomTab from '../screens/Tabs/BottomTab';
// import Home from '../Home/Home';
// import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Setting from '../screens/Setting/Setting';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import MovementScreen from '../screens/MovementScreen/MovementScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
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

                <Drawer.Screen name="SignInScreen" component={SignInScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon name="login" size={22} color={color} />

                        ),
                    }}
                />
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
                <Drawer.Screen name="SettingScreen" component={SettingScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="settings-outline" size={22} color={color} />

                        ),
                    }}
                />


                {/* <Drawer.Screen name="SignUpScreen" component={SignUpScreen} /> */}
                {/* <Drawer.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} /> */}
                {/* <Drawer.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} /> */}
                {/* <Drawer.Screen name="NewPasswordScreen" component={NewPasswordScreen} /> */}

                {/* <Drawer.Screen name="Setting" component={Setting} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})