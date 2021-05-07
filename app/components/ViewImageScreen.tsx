import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ViewImageScreen() {
  return (
    <View>
      <Text style={styles.imageText}>
        View Image Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
})
