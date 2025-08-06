import './index.scss';

function Cabecalho() {
    return (
        <div className="cabecalho">
            <nav>
                <img src="./static/icons/menu.svg" />
                <img src="./static/icons/pesquisa.svg" />
            </nav>
            <img src="./static/Logo.svg" alt="Logo Bebecê" />
            <nav>
                <img src="./static/icons/perfil.svg" />
                <div>
                    <img src="./static/icons/carrinho.svg" />
                    <p>0</p>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho;