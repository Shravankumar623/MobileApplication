import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import CustomInput from '../Components/CustomInput';
import { useForm, Controller } from "react-hook-form";
import CustomButton from '../Components/CustomButton';
import { AuthContext } from '../Context/AuthContext';


const HomeScreen = ({ navigation }) => {


  const { userInfo } = useContext(AuthContext);

  const onButtonPressend = () => {
    console.warn("onButtonPressend");
    navigation.navigate('BarrowerScreen');
  }


  const { control, handleSubmit, formState: { errors } } = useForm();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: 'black' }}>Hello {userInfo.name}</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <CustomInput
            control={control}
            name='password'
            rules={{ required: 'Password Required' }}
            placeholder='Passwowrd'
            secureTextEntry={true}
          />

          <CustomButton
            text="Sign In"
            onPress={onButtonPressend}
            type="PRIMARY"
          />
        </View>


      </ScrollView>

    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})