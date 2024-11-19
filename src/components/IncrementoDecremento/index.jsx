import {Container, Text, Botao} from './styles'


function IncrementoDecremento ({ numeroInicial, botaoDireito, botaoEsquerdo }) {




    return (

        <Container>
            <Botao onClick={botaoDireito}>
                +
            </Botao>
            <Text>{numeroInicial}</Text>
            <Botao onClick={botaoEsquerdo}>
                -
            </Botao>
        </Container>
    )

}

export default IncrementoDecremento;
