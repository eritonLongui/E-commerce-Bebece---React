import './index.scss'
import { useGlobalState } from "../../context/GlobalStateContext";

function MensagemCarrinho() {
    const { mostrarAdicionado } = useGlobalState();

    return (
        <div className={`mensagem-carrinho ${mostrarAdicionado ? "ativo" : ""}`}>
            <p>Adicionado ao carrinho</p>
        </div>
    )
}

export default MensagemCarrinho;