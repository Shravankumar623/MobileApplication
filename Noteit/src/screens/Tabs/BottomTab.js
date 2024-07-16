import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Home/Home';
import Setting from '../Setting/Setting';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct import statement

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.tabBar,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Setting} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#f9f9f9',
        borderTopWidth: 0,
        elevation: 5, // Add shadow for Android
        shadowOpacity: 0.1, // Add shadow for iOS
        shadowRadius: 10, // Add shadow for iOS
        height: 60, // Increase the height of the tab bar
    },
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        color: ' green'
    }
});

export default BottomTab;
