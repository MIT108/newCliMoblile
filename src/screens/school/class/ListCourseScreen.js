/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/school/class/listCourse/Header'
import Menu from '../../../components/school/class/listCourse/Menu'
import Course from '../../../components/school/class/listCourse/Course'

const ListCourseScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', minHeight: '100%', padding: 20}}>
      <View>
        <Header navigation={navigation}/>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Menu />
      </View>
      <ScrollView style={{ paddingBottom: 30 }}>
        <Course navigation={navigation}/>
        <Course  navigation={navigation} />
        <Course  navigation={navigation} />
        <Course  navigation={navigation} />
        <View style={{ marginBottom: 150, flex: 1, justifyContent: 'center' ,alignItems: 'center', flexDirection: 'row'}}>
          <Text>No more courses</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ListCourseScreen

const styles = StyleSheet.create({})