import './index.scss'
import bannerGrande from './banner-grande.png'
import bannerPequeno from './banner-pequeno.png'

function Banners() {
    return (
        <figure className="banners">
            <img src={bannerPequeno} alt="Banner - Be simple, be true." />
            <img src={bannerGrande} alt="Banner - Surpreende a cada passo" />
        </figure>
    )
}

export default Banners;
