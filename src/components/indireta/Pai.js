import React, { useState } from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text style={Estilo.txtG}>{num}</Text>
            <Filho  
                min={1}
                max={60}
                funcao={exibirValor} 
            />
        </>
    )    
}