import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
// import SharpTechLogo from '../assets/SharpTechLogo.png';
// import Logo_2 from '../assets/Logo_2.png';
import Logo_2 from '../../assets/Logo_2.png';
// import Logo from '../../../Noteit/assests/images/Logo.png';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { TextInput } from 'react-native-gesture-handler';


const SignInScreen = () => {

    const navigation = useNavigation();

    const { control, handleSubmit, formState : {errors} } = useForm();

    // console.warn(errors);


    const { height } = useWindowDimensions();
    const onSignInPressed = (data) => {

        console.warn("Signed In Sucessfully");
        console.log(data);
        console.log("Shravankumar");
        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
        navigation.navigate('ForgetPasswordScreen');

    }

    const singnUpPressed = () => {
        console.warn("Singn Up Pressed");
        navigation.navigate('SignUpScreen');
    }
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo_2} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.title}>
                    SignIn to your account
                </Text>

                <CustomInput
                    control={control}
                    name='phoneNumber'
                    rules={{required : 'User Name required', }}
                    placeholder='PhoneNumber'
                    secureTextEntry={false}

                />

                <CustomInput
                    control={control}
                    name='password'
                    rules={{required : 'Password Required'}}d
                    placeholder='Passwowrd'
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                    type="PRIMARY"
                />

                <CustomButton
                    text="Forgot Passowrd?"
                    onPress={onForgotPasswordPressed} type="TERTIARY"
                />

                <CustomButton
                    text="Don't have an a account? SignUp "
                    onPress={singnUpPressed}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    }
})

export default SignInScreen