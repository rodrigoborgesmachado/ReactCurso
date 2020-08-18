import React from 'react'
import { Button } from 'react-native'

export default props => {

    function GerarNumero(min, max) {
        const fator = max - min + 1;
        return parseInt(Math.random() * fator) - min;
    }

    return (
        <>
            <Button title="Executar" onPress={function () {
                const valor = GerarNumero(props.min, props.max);
                props.funcao(valor);
            }} />
        </>
    )

}