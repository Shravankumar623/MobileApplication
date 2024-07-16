import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../screens/Tabs/BottomTab'


const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home</Text> 
        {/* <BottomTab/>  */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"left,"
  },
  text: {

    fontSize: 35,
    color: 'blue',

  }
})