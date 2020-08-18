import React, { useState } from 'react'
import { Text } from 'react-native'
import { styles } from '../../styles/style'

export default ({ num = 0 }) => {
    return (
        <>
            <Text> O valor é:</Text>
            {
                num % 2 === 0 ?
                    <Text> Par </Text>
                    :
                    <Text> Impar </Text>
            }
        </>
    )

}