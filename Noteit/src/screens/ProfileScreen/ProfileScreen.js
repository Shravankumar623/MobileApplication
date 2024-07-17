import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct import statement
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Correct import statement

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 0,

                        }]}>Shravankumar</Title>
                        <Caption style={styles.Caption}>@_shravankumar0219</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" size={20} color='#777777' />
                    <Text style={{ color: 'green', marginLeft: 10, fontWeight: 'bold' }}>Banglore, India</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="phone-portrait-outline" size={20} color='#777777' />
                    <Text style={{ color: 'green', marginLeft: 10, fontWeight: 'bold' }}>9449983623</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" size={20} color='#777777' />
                    <Text style={{ color: 'green', marginLeft: 10, fontWeight: 'bold' }}>sharptechshravankumar@gmail.com</Text>
                </View>
            </View>
            <View style={styles.amountBoxWrapper}>
                <View style={styles.amountBox}>
                    <Title>$ 2454</Title>
                    <Caption>Credit Amount</Caption>
                </View>
                <View style={styles.amountBox}>
                    <Title>$ 5454</Title>
                    <Caption>Debit Amount</Caption>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {

        fontSize: 25,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    amountBoxWrapper: {

        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,

    },

})