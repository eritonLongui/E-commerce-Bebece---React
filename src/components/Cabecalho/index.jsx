import { useEffect, useState } from 'react';
import { useGlobalState } from '../../context/GlobalStateContext';
import './index.scss';

function Cabecalho() {
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
        <div className={`cabecalho ${scrolled ? "scrolled" : ""}`}>
            {scrolled ? <>
                <nav>
                    <img src="./static/icons/header/menu-dark.svg" />
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
                    <img src="./static/icons/header/menu.svg" />
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
        </div>
    )
}

export default Cabecalho;