import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}> 
                {/* teste = {usuario && Object.keys(usuario).length != 0} */}
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}