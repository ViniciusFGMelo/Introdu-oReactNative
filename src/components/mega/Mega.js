import React from "react"
import { Button, Text, TextInput, View } from "react-native"
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1 // gera nº aleatorios entre 1 a 10
        // se novo já estiver contido entao faz a recursao até achar um que não esteja
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }
    // essa func é o mesmo que: 
    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state
    //     const numeros = []
    //     for (let i = 0; i < qtdeNumeros; i++) {
    //         numeros.push(this.gerarNumerosNaoContido(numeros))
    //     }

    //     numeros.sort((a, b) => a - b)

    //     this.setState({ numeros })
    // }
    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'} //faz subir apenas o teclado numerico
                    style={{borderBottomWidth: 1}} // coloca borda embaixo
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                     title='Gerar'
                     onPress={this.gerarNumeros}
                />
                {/* <Text> */}
                    {/* join junta o array e separa por virgula */}
                    {/* {this.state.numeros.join(' ,')} */}
                {/* </Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}
