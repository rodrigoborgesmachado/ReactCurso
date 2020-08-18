import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './filho'


export default props => {
    let x = 13;
    let y = 1000;
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    )

}