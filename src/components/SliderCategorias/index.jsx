import './index.scss';
import categorias from '../../data/categorias.json'
import Categoria from '../Categoria';

function SliderCategorias() {
    return (
        <div className="slider-categorias">
            <h2>Categorias</h2>
            <div>
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} data={categoria} />
                ))}
            </div>
        </div>
    )
}

export default SliderCategorias;
