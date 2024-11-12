import {Container, Text} from './styles'
import IncrementoDecremento from '../../components/IncrementoDecremento';


function Principal(){

    const [numero, setNumero] = useState(0);

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
                botaoDireito={incrementarNumero()}
                botaoEsquerdo={decrementarNumero()}

            />
        </Container>
    )
}

export default Principal;