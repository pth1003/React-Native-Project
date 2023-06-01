import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import CountryList from "./src/components/CountryList";

const App = () => {
  return (
    <View style={styles.container}>
      <CountryList />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default App;