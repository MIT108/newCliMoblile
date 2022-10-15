/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AuthenticationHeader, IconButton, Colors, PrimaryButton , PrimaryInput } from '../../components'
import Toast from 'react-native-toast-message'
const VectorImage = require('../../assets/images/OTP.png')
import {loginAction} from '../../services/methods/authentication/action'

function LoginScreen({navigation}) {
    return (
        <View style={styles.androidSafeArea}>
            <View  style={{ zIndex: 1000 }}>
                <Toast />
            </View>

            <ScrollView style={styles.container}>
                <View>
                    <AuthenticationHeader text="Login." />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 300 }}>
                    <Image source={VectorImage} />
                </View>
                <View>
                    <LoginFrom navigation={navigation} />
                </View>
            </ScrollView>
        </View>
        
    )
}

const LoginFrom = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const EmailIcon = "https://img.icons8.com/material-rounded/100/000000/new-post.png"
    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }

    const login = () => {
        if (checkValidEmail(email) && password.length > 7) {
            const postData = {
                'email': email,
                'password': password
            }
            // setPassword("")


            loginAction(postData).then((response) => {
                Toast.show({
                    type: 'success',
                    text1: response.data.data.message,
                  });
                  navigation.push("NavigationStack")
            }).catch((error) => {
                if (error.response.status == 423) {
                    navigation.push("VerificationScreen")
                } else if (error.response.status == 424){
                    
                }else{
                    Toast.show({
                        type: 'error',
                        text1: 'Error',
                        text2: error.response.data.message,
                      });

                }
            })
            
        } else {
            Toast.show({
                type: 'error',
                text1: 'Validation Error',
                text2: 'Enter Valid credentials'
              });
            
        }
    }
    return (
        <View style={{ marginVertical: 50 }}>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={email} keyboardType="email-address" placeholder="" onChangeText={setEmail} type="text" label="email" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={password} keyboardType="email-address" placeholder="" onChangeText={setPassword} type="password" label="Password" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        Forgotten your password?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.PrimaryColorOne }}>
                            &nbsp; Click Here
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    (checkValidEmail(email) && password.length > 7) ?
                    (
                        <View style={{ marginVertical: 10 }}>
                            <PrimaryButton text="Login" handleClick={() => { 
                                    login()
                            }} color={Colors.PrimaryColorOne} />
                        </View>
                    ):
                    (
                        <View style={{ marginVertical: 10 }}>
                            <PrimaryButton text="Enter Valid information" handleClick={() => { 
                                Toast.show({
                                    type: 'error',
                                    text1: 'Validation Error',
                                    text2: 'Enter Valid credentials'
                                });
                            }} color="gray" />
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackgroundColor,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        padding: 20
    },
    container: {
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: Colors.PrimaryBackgroundColor,
    }
})