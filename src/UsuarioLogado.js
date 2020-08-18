import React, { useState } from 'react'
import { Text, TextInputComponent } from 'react-native'
import If from './if'

export default ({ usuario = {} }) => {
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text>Usuário Logado:</Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )

}