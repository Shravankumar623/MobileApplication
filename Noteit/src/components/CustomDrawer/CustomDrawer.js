import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {

    const onLogoutPressed = () => {
        console.warn("LogoutPressed");
    }
    return (

        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground
                    source={require('../../assets/menu-bg.jpeg')}
                    style={{ padding: 20 }} >
                    <Image
                        source={require('../../assets/user-profile.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Robot-Medium' }}>  Shravankumar</Text>

                </ImageBackground>

                <View style={{ flex: 1, backgroundColor: '#ffff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'Robot-Medium', marginLeft: 10, }}> Tell your Friends</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={onLogoutPressed} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'Robot-Medium', marginLeft: 10, }}> Logout</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})