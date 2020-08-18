import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'


export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const incrementa = () => setNumero(numero + props.passo)
    const decrementa = () => setNumero(numero - props.passo)

    return (
        <>
            <Text>
                Valor iniciar: {numero}
            </Text>
            <View style={{ flexDirection: "row" }}>
                <>
                    <Button title="+" onPress={incrementa} ></Button>
                </>
                <>
                    <Button title="-" onPress={decrementa} ></Button>
                </>
            </View>
        </>
    )

}