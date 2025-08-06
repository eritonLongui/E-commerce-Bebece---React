import './index.scss'

function Rodape() {
    return (
        <div className="rodape">
            <img src="./static/Logo-bege.svg" alt="Logo Bebecê" />
            <nav>
                <a href="#"><img src="./static/icons/social/instagram.svg" alt="Instagram Bebecê" /></a>
                <a href="#"><img src="./static/icons/social/facebook.svg" alt="Facebook Bebecê" /></a>
                <a href="#"><img src="./static/icons/social/pinterest.svg" alt="Pinterest Bebecê" /></a>
                <a href="#"><img src="./static/icons/social/twitter.svg" alt="Twitter Bebecê" /></a>
                <a href="#"><img src="./static/icons/social/tik-tok.svg" alt="Tik-tok Bebecê" /></a>
            </nav>
            <div>
                <h4>Sobre a empresa</h4>
                <a href="#">Quem somos</a>
                <a href="#">Fale conosco</a>
            </div>
            <div>
                <h4>Políticas</h4>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de uso</a>
                <a href="#">Política de Entrega</a>
                <a href="#">Política de Cumpom e Descontos</a>
            </div>
        </div>
    )
}

export default Rodape;
