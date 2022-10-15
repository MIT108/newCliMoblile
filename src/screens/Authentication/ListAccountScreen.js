/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/screens/school/listAccount/Header'

const ListAccountScreen = ({navigation}) => {
  
    return (
      <View style={{ padding: 20, backgroundColor: 'white', height: '100%' }}>
        <View>
          <Header navigation={navigation} />
        </View>
      </View>
    )
}

export default ListAccountScreen

const styles = StyleSheet.create({})