// import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../../Home/Home';
// import Setting from '../Setting/Setting';
// import ProfileScreen from '../ProfileScreen/ProfileScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct import statement

// const Tab = createBottomTabNavigator();


// const BottomTab = () => {
//     const { height, width } = useWindowDimensions();



//     return (
//         <Tab.Navigator style={styles.continer}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     if (route.name === 'Home') {
//                         iconName = focused ? 'home' : 'home-outline';
//                     } else if (route.name === 'Settings') {
//                         iconName = focused ? 'settings' : 'settings-outline';
//                     } else if (route.name === 'Profile') {
//                         iconName = focused ? 'person' : 'person-outline';
//                     }

//                     return (
//                         <View style={styles.iconContainer}>
//                             <Ionicons name={iconName} size={size} color={color} />
//                         </View>
//                     );
//                 },
//                 tabBarLabel: ({ focused, color }) => (
//                     <Text style={[styles.tabBarLabel, { color: focused ? 'tomato' : 'rgb(117, 95, 228)' }]}>
//                         {route.name}
//                     </Text>
//                 ),
//                 tabBarActiveTintColor: 'tomato',
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarStyle: [styles.tabBar, { height: height * 0.09, left: width * 0.01, right: width * 0.01, bottom: height * 0.01 }],
//                 headerShown: false,
//             })}
//         >
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Settings" component={Setting} />
//             <Tab.Screen name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//     );
// };

// const styles = StyleSheet.create({
//     tabBar: {
//         backgroundColor: '#f9f9f9',
//         borderTopWidth: 0,
//         elevation: 10, // Add shadow for Android
//         shadowOpacity: 0.1, // Add shadow for iOS
//         shadowRadius: 10, // Add shadow for iOS
//         borderRadius: 30, // Round all corners
//         position: 'absolute',
//         padding: 5,

//     },
//     iconContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//     },
//     tabBarLabel: {
//         marginBottom: 5, // Move the text upwards
//         fontSize: 12, // Customize the font size
//         fontWeight: 'bold', // Customize the font weight



//     }
// });

// export default BottomTab;
