import React from 'react'
import { Button } from 'react-native'



export default () => {

    function Executar() {
        console.warn('Hehe')
    }

    return (
        <>
            <Button title="Executar " onPress={Executar} />
        </>
    )
}