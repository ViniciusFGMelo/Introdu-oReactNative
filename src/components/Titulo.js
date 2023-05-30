import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
        // <View> || <React.Fragment> || <Fragmente> se importado 
        <> 
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </>
)