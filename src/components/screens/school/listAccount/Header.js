/* eslint-disable prettier/prettier */
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import List from './List'
import IAIImage from '../../../../assets/images//background.jpeg'
import {getUserAccount} from '../../../../services/methods/user/action'
import { logoutAction } from '../../../../services/methods/authentication/action'

const teacherData = [
    {
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },{
        logo: IAIImage,
        name: 'IAI',
        link: 'https://img.icons8.com/color/60/000000/filled-like.png'
    },
]

const Header = ({navigation}) => {
    const [userTeacherAccounts, setUserTeacherAccounts] = useState([]);
    const [userStudentAccounts, setUserStudentAccounts] = useState([]);

    useEffect(() =>{
        getUserAccount().then((response) => {
            setUserTeacherAccounts(response.data.data.teacher)
            setUserStudentAccounts(response.data.data.student)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

  return (
    <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <View>
                <Image style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/align-left.png')} />
            </View>
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        logoutAction().then((response)=>{
                            navigation.push("NavigationStack")
                        })
                    }}
                >
                    <Text style={{ color: "white" }}>SIGN OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.list}>
        {
            userTeacherAccounts.length > 0 ? (
                <List heading={"Teacher Accounts."} items={userTeacherAccounts} type="teacher" navigation={navigation} />
            ): (
                <Text>No Available Teachers Account</Text>
            )
        }
        </View>
        
        {
            userStudentAccounts.length > 0 ? (
                <List heading={"Student Accounts."} items={userStudentAccounts} type="student" navigation={navigation} />
            ): (
                <Text>No Available Students Account</Text>
            )
        }
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2450A6',
        maxWidth: 'auto',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5
    },
    list: {
        marginTop: 50
    }
})