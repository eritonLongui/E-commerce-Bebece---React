import { useEffect, useState } from 'react';
import { useGlobalState } from '../../context/GlobalStateContext';
import Menu from "./../Menu";
import './index.scss';

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const { countCarrinho } = useGlobalState();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`cabecalho ${scrolled ? "scrolled" : ""}`}>
                {scrolled ? <>
                    <nav>
                        <img
                            src="./static/icons/header/menu-dark.svg"
                            onClick={() => setMenuAberto(true)}
                        />
                        <img src="./static/icons/header/pesquisa-dark.svg" />
                    </nav>
                    <img src="./static/Logo-preto.svg" alt="Logo Bebecê" />
                    <nav>
                        <img src="./static/icons/header/perfil-dark.svg" />
                        <div>
                            <img src="./static/icons/header/carrinho-dark.svg" />
                            <p>{countCarrinho}</p>
                        </div>
                    </nav>
                </> : <>
                    <nav>
                        <img
                            src="./static/icons/header/menu.svg"
                            onClick={() => setMenuAberto(true)}
                        />
                        <img src="./static/icons/header/pesquisa.svg" />
                    </nav>
                    <img src="./static/Logo.svg" alt="Logo Bebecê" />
                    <nav>
                        <img src="./static/icons/header/perfil.svg" />
                        <div>
                            <img src="./static/icons/header/carrinho.svg" />
                            <p>{countCarrinho}</p>
                        </div>
                    </nav>
                </>}
            </header>
            <Menu aberto={menuAberto} fechar={() => setMenuAberto(false)}/>
        </>
    )
}

export default Cabecalho;