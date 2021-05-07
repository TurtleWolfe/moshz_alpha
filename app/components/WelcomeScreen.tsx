import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/Supplementary/background.jpg')}
    >
      <View
        style={styles.logoContainer}
      >
        <Image
          style={styles.logo}
          source={require("../assets/Supplementary/logo-red.png")} />
        <Text
          style={styles.welcomeText}
        >
          Welcome Screen
      </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  loginButton: {
    height: 70,
    width: '100%',
    backgroundColor: '#fc5c65'
  },
  logo: {
    height: 100,
    width: 100,
    // position: 'absolute',
    // top: 70,
  },
  logoContainer: {
    // height: 100,
    // width: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  registerButton: {
    height: 70,
    width: '100%',
    backgroundColor: '#4ecdc4'
  },
  welcomeText: {
    // alignContent: 'center',
    color: 'dodgerblue',
    // justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
