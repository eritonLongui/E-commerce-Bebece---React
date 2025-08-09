import { useState } from 'react';
import './index.scss'

function Menu({ aberto, fechar }) {
    const [categoriaAberta, setCategoriaAberta] = useState(null);

    const toggleCategoria = (nome) => {
        setCategoriaAberta(categoriaAberta === nome ? null : nome);
    };

    return (
        <aside className={`menu ${aberto ? "aberto" : ""}`}>
            <header>
                <img src="./static/Logo-preto.svg" alt="Logo Bebecê" />
                <button onClick={fechar} className="fechar"><img src="./static/icons/exit.svg" /></button>
            </header>
            <figure>
                <img src="./static/images/banners/banner-principal-1.png" alt="Banner sapatos modelo" />
                <div className="overlay" />
                <div className="frame">
                    <h3>Celebration - 20 anos</h3>
                    <a href="#">Conheça</a>
                </div>
            </figure>
            <nav>
                <p>Liquida</p>
                <div className={`categoria ${categoriaAberta === "sapatos" ? "aberta" : ""}`}>
                    <div onClick={() => toggleCategoria("sapatos")} className="list">
                        <p>Sapatos</p>
                        <img src="./static/icons/toggle-list.svg" alt="toggle" />
                    </div>
                    {categoriaAberta === "sapatos" && (
                        <ul>
                            <li>Scarpins</li>
                            <li>Mocassim</li>
                            <li>Sapatilhas</li>
                            <li>Mules</li>
                            <li>Peep Toe</li>
                            <li>Oxford</li>
                        </ul>
                    )}
                </div>
                <div className="list">
                    <p>Sandálias</p><img src="./static/icons/toggle-list.svg" />
                </div>
                <div className="list">
                    <p>Botas</p><img src="./static/icons/toggle-list.svg" />
                </div>
                <div className="list">
                    <p>Tênis</p><img src="./static/icons/toggle-list.svg" />
                </div>
                <a href="#">Outlet</a>
            </nav>
        </aside>
    )
}

export default Menu;
