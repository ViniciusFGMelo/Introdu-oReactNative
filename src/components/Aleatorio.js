import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => { // ou export default ({ min, max}) 
    const { min, max } = props // não necessario na outra forma
    const delta = max - min +1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}