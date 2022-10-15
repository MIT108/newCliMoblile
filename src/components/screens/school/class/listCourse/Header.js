/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { removeData } from '../../../../helper/UserStorage'

const Header = ({navigation}) => {
    return (
        <View style={{ flexDirection: 'row' }}> 
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>Welcome, </Text>
                <Text style={styles.text2}>user.</Text>
            </View>
            <View style={{ flex: 1 , justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity
            onPress={()=>{
              removeData()
              navigation.push("SchoolDrawer")
            }}>
            <Image source={require('../../../../assets/Icons/circle-plus.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: '#07338C',
    borderBottomWidth: 2, 
    paddingBottom: 5
  },
  text2:{
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  }
})