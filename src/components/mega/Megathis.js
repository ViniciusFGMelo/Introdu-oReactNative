import React from "react"
import { Text, TextInput } from "react-native"
import Estilo from '../estilo'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros
    //     }
    // }

    // alterarQtdeNumero(qtde) {
    //     this.setState({ qtdeNumeros })
    // } 
    // traansformando aa func para arrow
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'} //faz subir apenas o teclado numerico
                    style={{borderBottomWidth: 1}} // coloca borda embaixo
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    // onChangeText={this.alterarQtdeNumero} 
                    // operação abaixo corrige o problemaa do this
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)} 
                    // melhor forma de corrigir o this é:
                    // transformando a func alterarQtdeNumero para arrow 
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}
