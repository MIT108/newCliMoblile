/* eslint-disable prettier/prettier */
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthenticationHeader, Colors, PrimaryButton } from '../../components'

const BannerImage = "../../assets/images/sendEmail.png"
const SentEmailScreen = () => {
    return (
        <View style={styles.androidSafeArea}>
            <View style={styles.container}>
                <View>
                    <AuthenticationHeader text="Sent Email." />
                </View>
                <View>
                    <Banner />
                </View>
                <View>
                    <Body />
                </View>
            </View>
        </View>
    )
}

const Banner = () =>{
    return (
        <View style={styles.bannerContainer}>
            <View style={styles.bannerImage}>
                <Image source={require(BannerImage)} />
            </View>
            <View style={styles.bannerText}>
                <Text style={styles.text}>Email sent Successfully</Text>
            </View>
        </View>
    )
}

const Body = () =>{
    return (
        <View style={{  }}>
            <View style={{ marginBottom: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 17, textAlign: 'center'}}>
                    Check your mail service inbox for the verification code
                </Text>
            </View>
            <View style={{  marginBottom: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
                <View>
                    <Text style={{ width: 200, textAlign: 'center', fontSize: 15, color: 'gray' }}>Didn't receive the code?</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            </View>
            <View>
                <PrimaryButton  text="Resend Code" handleClick={() => { alert("OK") }} color={Colors.PrimaryColorOne} />
            </View>
        </View>
    )
}

export default SentEmailScreen

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackgroundColor,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: Colors.PrimaryBackgroundColor,
    },
    bannerContainer: {
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 50
    },
    bannerImage: {

    },
    bannerText:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30, 
        textAlign: 'center',
        color: Colors.PrimaryColorOne,
    }
})