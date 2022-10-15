import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


type Props = {
    value: any,
    keyboardType: any,
    placeholder: string,
    onChangeText: any,
    type: string,
    label: string,
    icon: any,
}

const PrimaryInput: React.FC<Props> = ({ value, keyboardType, placeholder, onChangeText, type, icon, label }: Props) => {
    const [secret, setSecret] = useState(false)   

    // if (type=='password') {
    //     setSecret(true)
    // }
    const OpenEye: any = "https://img.icons8.com/ios-glyphs/100/000000/visible--v1.png"
    const CloseEye: any = "https://img.icons8.com/material-sharp/100/000000/closed-eye.png"
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginVertical: 10  }}>
                {label}
            </Text>
            <View style={[styles.inputContainer]}>
                <TextInput
                    style={[styles.input]}
                    placeholder={placeholder}
                    secureTextEntry={secret}
                    keyboardType={keyboardType}
                    onChangeText={(text) => onChangeText(text)}
                    value={value} />
                {type == 'text' ?
                    <>
                        <Image source={{ uri: icon }} style={{ width: 30, height: 30 }} />
                    </>
                    :
                    <>
                        {secret == true ?
                            <>
                                <TouchableOpacity onPress={() =>{setSecret(false)}} >
                                    <Image source={{ uri: CloseEye }} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <TouchableOpacity onPress={() =>{setSecret(true)}}>
                                    <Image source={{ uri: OpenEye }} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                            </>

                        }

                    </>
                }
            </View>
        </View>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: 90,
        width: '100%'
    },
    inputContainer: {
        borderWidth: 1,
        height: 45,
        padding: 0,
        paddingHorizontal: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 45,
        fontSize: 20,
        flex: 1
    }
})