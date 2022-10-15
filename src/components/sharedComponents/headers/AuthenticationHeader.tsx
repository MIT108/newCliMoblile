import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../colors'


type Props = {
    text: string
}
const Logo: any = require('../../../assets/logo/logo1.png')

const AuthenticationHeader = ({ text }: Props) => {
    return (
        <View style={styles.androidSafeArea}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'flex-end', height: 100 }}>
                    <Text style={{ fontSize: 50, color: Colors.PrimaryColorOne, fontWeight: 'bold' }}>{text}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={Logo} style={{ width: 100, height: 100, margin:10 }} />
                </View>
            </View>
        </View>
    )
}

export default AuthenticationHeader

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackgroundColor,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1, 
        width: '100%', 
        height: '100%',  
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    }
})