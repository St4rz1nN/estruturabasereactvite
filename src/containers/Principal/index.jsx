import {Container, Text, Botao} from './styles'
import IncrementoDecremento from '../../components/IncrementoDecremento';
import { useState } from 'react';


function Principal(){

    const [numero, setNumero] = useState(0);


    const campos = (
        {
            tipo= "label",
            texto= "Tester"
        },
        {
            tipo= "input"
            
        },

    )



    const incrementarNumero = () => {  
        setNumero(numero+1)
    }

    const decrementarNumero = () => {
        if (numero-1 < 0){
            alert("O numero deve ser maior que 1!")
        }else {
            setNumero(numero-1)
        }
    }

    return (
        <Container>
            <Text>
                Teste
            </Text>
            <IncrementoDecremento
                numeroInicial={numero}
                botaoDireito={incrementarNumero}
                botaoEsquerdo={decrementarNumero}

            />

            <Botao>
                Modal Tester
            </Botao>

        </Container>
    )
}

export default Principal;