import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';


const SignUpScreen = () => {

    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm({
        // defaultValues:{
        //     phoneNumber: "9449983623"
        // }
    });
    const Email_Pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const pwdWatch = watch('password');


    const onSignUpPressed = async (register) => {

        console.log("SignUp Successfully");  // While Deploying need to Commit this line
        console.log(register);               // While Deploying need to Commit this line

        try {
            const response = await axios.post('http://192.168.3.60:8080/register', register);

            console.log("Response Data:", response);
            navigation.navigate('SignInScreen');
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const onSignPressed = () => {

        console.warn("SingnIn Pressed");
        navigation.navigate('SignInScreen');
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms of use pressed");
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed");
    }
    return (

        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View
                style={styles.root}>

                <Text style={styles.title}> Create an accoount </Text>

                <CustomInput
                    control={control}
                    name="name"
                    placeholder='Name'
                    secureTextEntry={false}
                    rules={{ required: 'Name Required' }}
                />
                <CustomInput
                    control={control}
                    name="phone"
                    placeholder='PhoneNumber'
                    secureTextEntry={false}
                    rules={{ required: 'Phone Number Required', minLength: 10, maxLength: 10 }}
                />

                <CustomInput
                    control={control}
                    name="email"
                    placeholder='Email'
                    secureTextEntry={false}
                    rules={{ required: 'Email required', pattern: { value: Email_Pattern, message: 'Email is Invalid' } }}
                />

                <CustomInput
                    control={control}
                    name="password"
                    placeholder='Passwowrd'
                    secureTextEntry={true}
                    rules={{ required: 'Password Required', minLength: { value: 4, message: 'Password Should be at least 4 charecter' } }}
                />
                <CustomInput
                    control={control}
                    name="passwordRepeat"
                    placeholder='Confirm Passwowrd'
                    secureTextEntry={false}
                    rules={{ required: 'Confirm Passord Required', validate: value => value == pwdWatch || 'Password Do not Match' }}
                />
                <CustomButton
                    text="SignUp"
                    onPress={handleSubmit(onSignUpPressed)}
                    type="PRIMARY"
                />

                <Text style={styles.text}>By SignUp, you confirm that you accept our
                    <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text> and
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy </Text>
                </Text>

                <CustomButton text="Have an a account ? SignIn " onPress={onSignPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    title: {

        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'grey',
        marginVertical: '10',
    },
    link: {

        color: '#FDB075',

    }
})

export default SignUpScreen