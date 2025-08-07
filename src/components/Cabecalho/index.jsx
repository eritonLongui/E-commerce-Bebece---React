import { useEffect, useState } from 'react';
import './index.scss';

function Cabecalho() {
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
                        <p>0</p>
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
                        <p>0</p>
                    </div>
                </nav>
            </>}
        </div>
    )
}

export default Cabecalho;