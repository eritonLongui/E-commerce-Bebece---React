import Slider from 'react-slick';
import BlogCard from '../BlogCard';
import './index.scss'

const blogPage = [
    {
        id: "1",
        imagem: "./static/images/blog/imagem-capa-1.png",
        titulo: "NOVO LOGO, MESMA ESSÊNCIA.",
        descricao: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!"
    },
    {
        id: "2",
        imagem: "./static/images/blog/imagem-capa-2.png",
        titulo: "É AMANHÃ",
        descricao: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️"
    },
    {
        id: "3",
        imagem: "./static/images/blog/imagem-capa-3.png#",
        titulo: "descubra o glamour em cada passo.",
        descricao: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨"
    }
];

function ConhecaMais() {
    const settings = {
        dots: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <section className="conheca-mais">
            <div className="fixo">
                <h2>Conheça mais</h2>
                <p>Fique por dentro de tudo o que acontece na Bebecê.</p>
            </div>
            <Slider {...settings}>
                {blogPage.map((page) => (
                    <div className="card">
                        <BlogCard
                            key={page.id}
                            imagem={page.imagem}
                            titulo={page.titulo}
                            descricao={page.descricao}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default ConhecaMais;
