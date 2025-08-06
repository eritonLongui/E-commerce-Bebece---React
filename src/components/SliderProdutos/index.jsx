import './index.scss'
import { useState, useEffect } from 'react';
import { getProducts } from '../../utils';

function SliderProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getProducts().then((dados) => {
            setProdutos(dados);
        });
    }, []);

    return (
        <div className="slider-produtos">
            <h2>Lançamentos</h2>
            <div>
                {produtos.map((produto) => (
                    <div key={produto.id} className="produto-card">
                        <figure>
                            <img src={produto.image} alt={produto.name} />
                            <div className="icon favoritar">
                                <img src="./static/icons/favorito.svg" />
                            </div>
                            <div className="icon adicionar-carrinho">
                                <img src="./static/icons/adicionar-carrinho.svg" />
                            </div>
                            <p>
                                {produto.price.isDiscount && (
                                    <span className="desconto">
                                        {Math.round(((produto.price.amount - produto.price.isDiscount) / produto.price.amount) * 100)}% OFF
                                    </span>
                                )}
                            </p>
                        </figure>
                        <div>
                            <h3>{produto.name}</h3>
                            <p>
                                {produto.price.isDiscount && (
                                    <span className="preco-antigo">R$ {produto.price.amount}</span>
                                )}
                                R$ {produto.price.isDiscount ?? produto.price.amount}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderProdutos;
