/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import SubjectItem from '../../components/screens/school/SubjectItem';

export default function ListAccountScreen({navigation}) {
    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <SubjectItem navigation={navigation} />
                <SubjectItem navigation={navigation} />
            </ScrollView>
        </View>
    )
}