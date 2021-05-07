import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/Supplementary/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
