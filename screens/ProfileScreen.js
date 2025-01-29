import { View, Text, StyleSheet } from "react-native"

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is your Profile Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105, 188, 244, 0.7)",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

