import React, { useState } from 'react'
import { Text, FlatList } from 'react-native'
import produtos from './produtos'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} tem R$ {p.preco}</Text>
    }
    return (
        <>
            <Text>
                Lista Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )

}