/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChangePasswordForm from './../../components/screens/authentication/ChangePasswordForm'
import { AuthenticationHeader } from '../../components'
import { getVariable } from '../../services/AsyncStorageMethods'



const PAGE = 'Welcome'


const ChangePasswordScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
      getVariable('misceoUserInformation').then((response) => {
          setUserInfo(response)
      })
  }, [])
  return (
    <View style={{ backgroundColor: 'white', height: '100%', padding: 10 }}>
      <ScrollView>  
        <View>
            <AuthenticationHeader text={PAGE} />
        </View>
        <View style={{  margin: 20 }}>
          <View style={{ marginBottom: 20}}>
            <Text style={{ fontSize: 15, color: 'black'}}>We coordinate learning activities, in the field or at a distance, to enable learning to achieve their objectives. </Text>
          </View>
          <ChangePasswordForm navigation={navigation} userInfo={userInfo} />
          
        </View>
      </ScrollView>
    </View>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({})