/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'

import { Divider } from 'react-native-elements'


import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
import ImgToBase64 from 'react-native-image-base64';
import { Colors, PrimaryButton, PrimaryInput } from '../../sharedComponents';
const EmailIcon = "https://img.icons8.com/material-rounded/100/000000/new-post.png"
import Toast from 'react-native-toast-message'
import { changeStartupPasswordAction } from '../../../services/methods/authentication/action';


const ChangePasswordForm = ({navigation, userInfo}) => {

    const [imageUri, setImage] = useState("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png")


    
    const [
        scaleAnimationDialog, setScaleAnimationDialog
    ] = useState(false);
    const [caption, setCaption] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
          maxHeight: 200,
          maxWidth: 200,
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: true,
        }
      }
      const getImage = async (Gallery) => {
          let image = []
          console.log(options)
          try {
            
          } catch (error) {
            console.log(error)
          }
        // setImage(image.assets[0].uri)
        // ImgToBase64.getBase64String(imageUri)
        //     .then((base64String) => {
        //         setImageBase64(base64String)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });
        console.log("hello")
      }
      

      const changePassword = () => {

        var data = {
            "password" : password,
            "id" : userInfo.id
        }
        changeStartupPasswordAction(data).then((response) =>{
            navigation.push("School")
        }).catch((error) => {
            console.log(error)
            console.log(error.response.data)
            Alert.alert(error.response.data.message)
        })
      }


    return (
        <>    
            <View  style={{ zIndex: 1000, position: 'absolute', top: 0, width: '100%'}}>
                <Toast />
            </View>

            <View>
                
                <Dialog
                onTouchOutside={() => {
                    setScaleAnimationDialog(false);
                }}
                width={0.9}
                visible={scaleAnimationDialog}
                dialogAnimation={new ScaleAnimation()}
                onHardwareBackPress={() => {
                    setScaleAnimationDialog(false);
                    console.log('onHardwareBackPress');
                    return true;
                }}
                dialogTitle={
                    <DialogTitle
                    title="Select image option"
                    hasTitleBar={false}
                    />
                }
                actions={[
                    <DialogButton
                    text="DISMISS"
                    onPress={() => {
                        setScaleAnimationDialog(false);
                    }}
                    key="button-1"
                    />,
                ]}>
                <DialogContent>
                    <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10 }}>
                        <Button
                            style={{ backgroundColor: '#2947D9', color: 'white' }}
                            title="Camera"
                            onPress={() => {
                                getImage(false);
                            }}
                            key="button-1"
                        />
                        
                        <Button
                            style={{ backgroundColor: '#2947D9', color: 'white'}}
                            title="Gallery"
                            onPress={() => {
                                getImage(true)
                            }}
                            key="button-2"
                        />
                    </View>
                    </View>
                </DialogContent>
                </Dialog>
            </View>
                
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 15, margin: 10}}>Choose profile picture:</Text>
                    <View style={{ color: 'black', width: 50, alignItems: 'center'}}>
                        <Divider width={1} orientation="vertical" />
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Image style={styles.image} source={{ uri: imageUri }}/>
                    <TouchableOpacity onPress={()=>{
                        setScaleAnimationDialog(true)
                    }}>
                    <Text style={{color: '#2947D9'}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 50 }}>

                <PrimaryInput value={password} keyboardType="default" placeholder="" onChangeText={setPassword} type="password" label="Password" icon={EmailIcon} />

                <PrimaryInput value={confirmPassword} keyboardType="default" placeholder="" onChangeText={setConfirmPassword} type="password" label="Confirm Password" icon={EmailIcon} />

                <View style={{ marginTop: 60}}>
                {
                    (password.length > 7 && confirmPassword == password) ?
                    (
                        <View style={{ marginVertical: 10 }}>
                            <PrimaryButton text="Change Default Password" handleClick={() => { 
                                    changePassword()
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
        </>
        
 

    )
}

export default ChangePasswordForm

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
    },
    inputField: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
        color: 'black',
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        marginVertical: 20,
        padding: 10,
        height: 50,
    },

    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginVertical: 20,
    },
    icons: {
        width: 15,
        height: 15,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})