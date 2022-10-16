/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import SubjectItem from '../../components/screens/school/SubjectItem';

export default function ListAccountScreen() {
    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <SubjectItem />
                <SubjectItem />
            </ScrollView>
        </View>
    )
}