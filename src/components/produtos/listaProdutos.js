import React, { useState } from 'react'
import { Text } from 'react-native'
import produtos from './produtos'

export default props => {
    function retornaLista() {
        return (produtos.map(p => {
            return <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
        }))
    }

    return (
        <>
            <Text>Lista de Produtos:</Text>
            {retornaLista()}
        </>
    )

}