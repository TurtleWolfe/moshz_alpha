import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import colors from '../constants/Colors'

export default function ViewImageScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={require("../assets/Supplementary/chair.jpg")}
          style={styles.image}
        >
          <View style={styles.closeIcon}></View>
          <View style={styles.deleteIcon}></View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
