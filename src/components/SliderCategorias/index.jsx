import './index.scss';
import categorias from '../../data/categorias.json'
import Categoria from '../Categoria';

function SliderCategorias() {
    return (
        <>
            <h2 className="titulo">Categorias</h2>
            <div className="slider-categorias">
                <div>
                    {categorias.map((categoria) => (
                        <Categoria key={categoria.id} data={categoria} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SliderCategorias;
