import React, { useState } from 'react'
import { Text } from 'react-native'
// import Membro from './membro'

export default props => {
    return (
        <>
            {/* <Membro nome="Andressa" sobrenome="Machado" /> */}
            <Text>Membros da familia:</Text>
            {props.children}

        </>
    )

}