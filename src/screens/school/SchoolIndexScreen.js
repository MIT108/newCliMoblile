/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SchoolIndexScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to About Screen"
      onPress={() => navigation.navigate("About")}  />
    </View>
  )
}

export default SchoolIndexScreen

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
  