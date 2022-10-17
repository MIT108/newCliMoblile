/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React, {
    useState
} from 'react'

import {
    Text,
    View,
    StyleSheet
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors } from './sharedComponents';
export default function Loader({loading}) {
    return(
        <View style={styles.container}>
                <Spinner
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner
                textContent={'Loading...'}
                //Text style of the Spinner Text
                textStyle={styles.spinnerTextStyle}
                />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    spinnerTextStyle: {
        color: "white",
    },
});