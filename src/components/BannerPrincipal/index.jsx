import './index.scss';
import banner1 from './banner-principal-1.png'
import banner2 from './banner-principal-2.png'
import banner3 from './banner-principal-3.png'

function BannerPrincipal() {
    return (
        <div className="banner-principal">
            <figure>
                <img src={banner1} alt="Banner de capa Bebecê - Mulher sentada " />
                <img src={banner2} alt="Banner de capa Bebecê - Mulher escorada " />
                <img src={banner3} alt="Banner de capa Bebecê - Sapatos polaroid " />
            </figure>
            <div>
                <a href="#">Conheça agora!</a>
            </div>
        </div>
    )
}

export default BannerPrincipal;
