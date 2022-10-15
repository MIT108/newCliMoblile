/* eslint-disable prettier/prettier */
import { Alert, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AuthenticationHeader, Colors, PrimaryButton } from '../../components'
import KeycodeInput from '../../components/keyCodeInput';
import { getVariable } from '../../services/AsyncStorageMethods';
import { sendOtpAction, verifyOtpAction } from '../../services/methods/authentication/action';


const BannerImage = "../../assets/images//sendEmail.png"

const VerificationScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        getVariable('misceoUserInformation').then((response) => {
            setUserInfo(response)
        })
    }, [])
    return (
        <View style={styles.androidSafeArea}>
            <View style={styles.container}>
                <ScrollView>
                    
                <View>
                    <AuthenticationHeader text="Verification." />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 300 }}>
                    <Image source={require(BannerImage)} />
                </View>
                    <View>
                        <Body userInfo={userInfo} navigation={navigation} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}



const Body = ({userInfo, navigation}) => {

    const [otp, setOtp] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    const sendCode = () => {
        setEmailSent(false)

        if (userInfo.id != null) {
            sendOtpAction(userInfo.id).then((response) =>{
                console.log(response.data)
                Alert.alert(response.data.message)
                setEmailSent(true)
            }).catch((error) => {
                console.log(error)
                console.log(error.response.data)
                Alert.alert(error.response.data.message)
            })
        }else{
            Alert.alert("No email is defined")
        }
    } 
    const verifyCode = () => {

        if (emailSent) {
            var data = {
                "code" : otp,
                "id" : userInfo.id
            }
            verifyOtpAction(data).then((response) =>{
            }).catch((error) => {
                
                if (error.response.status == 423 || error.response.status == 424) {
                    navigation.push("ChangePasswordScreen")
                }
                console.log(error)
                console.log(error.response.data)
                Alert.alert(error.response.data.message)
            })
        }else{
            Alert.alert("No email is defined")
        }
    } 


    return (

        <View>
            <View style={{ marginBottom: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, textAlign: 'center' }}>
                    A 4 digit code will be sent to {userInfo.email}
                    <TouchableOpacity
                        onPress={() => {
                            sendCode()
                        }}
                    >
                        <Text style={{ color: Colors.PrimaryColorOne }}>
                            &nbsp; click to send code
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.otpContainer}>

                <KeycodeInput
                    numeric
                    value={otp}
                    onChange={setOtp}
                    barStyle={{
                        height: 2,
                        width: 24,
                    }}
                    textStyle={{
                        fontSize: 28,
                        marginLeft: -2,
                        width: 20,
                    }}
                    inputStyle={{
                        width: 1,
                        height: 1,
                        position: 'absolute'
                    }}
                />
            </View>
            
            {
                    (emailSent && otp.length > 3) ?
                    (
                        <View>
                            <PrimaryButton text="Verify code" handleClick={() => { verifyCode() }} color={Colors.PrimaryColorOne} />
                        </View>
                    ):
                    (
                        <View>
                            <PrimaryButton text="Send Email" handleClick={() => {sendCode() }} color="gray" />
                        </View>
                    )
                }

        </View>
    )
}

export default VerificationScreen

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
    bannerText: {
        marginTop: 30,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: Colors.PrimaryColorOne,
    },
    otpContainer: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})