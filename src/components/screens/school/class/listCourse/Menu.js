/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../../../assets/Icons/statistics-svgrepo-com.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../../../assets/Icons/calendar.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon2} source={require('../../../../assets/Icons/rank1.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center',  }}>
            <Text style={{ color: '#07338C', fontWeight: 'bold', fontSize: 15 }}>
                Filter
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 10}}>
                <Image  style={styles.icon3}  source={require('../../../../assets/Icons/filter.png')} />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    icon:{
        width: 20,
        height: 20,
        marginRight: 30
    },
    icon2:{
        width: 27,
        height: 27,
    },
    icon3:{
        width: 20,
        height: 20,
    }
})