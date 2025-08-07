import Slider from "react-slick";
import './index.scss';

const banners = [
    { id: 1, imagem: "/static/images/banners/banner-principal-1.png", alt: "Banner de capa Bebecê - Mulher sentada" },
    { id: 2, imagem: "/static/images/banners/banner-principal-2.png", alt: "Banner de capa Bebecê - Mulher escorada" },
    { id: 3, imagem: "/static/images/banners/banner-principal-3.png", alt: "Banner de capa Bebecê - Sapatos polaroid" }
];

function BannerPrincipal() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="banner-principal">
            <Slider {...settings}>
                {banners.map((item) => (
                    <figure key={item.id}>
                        <img src={item.imagem} alt={item.alt} />
                    </figure>
                ))}
            </Slider>
            <button className="conheca-agora">
                <a href="#">Conheça agora!</a>
            </button>
        </div>
    )
}

export default BannerPrincipal;
