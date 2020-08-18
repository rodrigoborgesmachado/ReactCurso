import React from 'react'
import { Text } from 'react-native'

export default (props) => {
    let { min, max } = props

    let texto = '';
    let valor = Math.floor(Math.random() * (max - min)) + min;
    texto = 'Número aleatorio: ' + valor;
    return (
        <Text>
            {texto}
        </Text>
    )
}