import SliderCategorias from '../SliderCategorias';
import BannerPrincipal from '../BannerPrincipal';
import Banners from '../Banners';
import SliderProdutos from '../SliderProdutos';
import ConhecaMais from '../ConhecaMais';
import './index.scss';

function Main() {
    return (
        <div className="main">
            <BannerPrincipal />
            <SliderCategorias />
            <Banners />
            <SliderProdutos />
            <ConhecaMais />
        </div>
    )
}

export default Main;
 