import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default props => {
    return (
        <>
            <View style={Style.Display}>
                <Text style={Style.DisplayText}>
                    {props.num}
                </Text>
            </View>
        </>
    )

}

const Style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DisplayText: {
        color: '#FFF',
    }
})