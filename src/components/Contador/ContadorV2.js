import React, { useState } from 'react'
import { Text } from 'react-native'
import Display from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => { setNum(num + 1) }
    const dec = () => { setNum(num - 1) }

    return (
        <>
            <Text>
                Contador
            </Text>
            <Display num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )

}