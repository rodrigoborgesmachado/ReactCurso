import React from 'react'
import { Text } from 'react-native'

export default (props) => {
    console.warn(props);
    let texto = '';
    if (props.max > props.min) {
        texto = 'O valor ' + props.max + ' é menor que o valor ' + props.min;
    }
    else {
        texto = 'O valor ' + props.mim + ' é menor que o valor ' + props.max;
    }
    return (
        <Text>
            {texto}
        </Text>
    )
} 