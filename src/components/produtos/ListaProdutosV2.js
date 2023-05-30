import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos V2</Text>
            <FlatList 
                // array de objetos que contém os dados a serem exibidos
                data={produtos} 
                // define uma chave única para cada item da lista
                keyExtractor={i => '$i.id'}
                // função que renderiza cada item do array de dados
                renderItem={produtoRender}
            />
        </>
    )
}