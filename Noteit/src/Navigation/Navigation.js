import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/ScinInScreen/SignInScreen';
import SignUpScreen from '../screens/SingnUpScreen/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen/VerifyEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import BottomTab from '../screens/Tabs/BottomTab';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
                <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
                <Stack.Screen name="Home" component={BottomTab} />
                <Stack.Screen name="Setting" component={BottomTab} />
                <Stack.Screen name="ProfileScreen" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})