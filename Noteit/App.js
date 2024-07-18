import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, StyleSheet, } from 'react-native'
import Navigation from './src/Navigation/Navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC', // Set the background color to VERYLIGT BLUE
  }
})