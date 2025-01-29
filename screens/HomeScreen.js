import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(134, 143, 240, 0.7)",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

