import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './filho'

export default props => {
    const [num, setNum] = useState(0)


    function ExibirValor(valor) {
        setNum(valor)
    }

    return (
        <>
            <Text>{num}</Text>
            <Filho min={1} max={69} funcao={ExibirValor} />
        </>
    )

}