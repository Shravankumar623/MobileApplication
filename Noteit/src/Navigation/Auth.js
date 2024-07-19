import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/ScinInScreen/SignInScreen'
import SignUpScreen from '../screens/SingnUpScreen/SignUpScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen'
import VerifyEmailScreen from '../screens/VerifyEmailScreen/VerifyEmailScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen'
import { createStackNavigator } from '@react-navigation/stack';



const Auth = () => {


    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="MessageScreen" component={MessageScreen} />
                <Stack.Screen name="MovementScreen" component={MovementScreen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} /> */}

                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
                <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />

                {/* <Stack.Screen name="Setting" component={Setting} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Auth

const styles = StyleSheet.create({})