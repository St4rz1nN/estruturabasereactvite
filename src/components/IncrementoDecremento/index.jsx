import {Container, Text, Botao} from './styles'


const props = {
    numeroInicial,
    botaoDireita,
    botaoEsquerda,
}


function IncrementoDecremento (props) {


    return (

        <Container>
            <Botao>
                +
            </Botao>
            <Text>0</Text>
            <Botao>
                -
            </Botao>
        </Container>
    )

}

export default IncrementoDecremento;
