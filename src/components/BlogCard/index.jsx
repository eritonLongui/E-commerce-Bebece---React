import './index.scss'

function BlogCard({ titulo, descricao, imagem }) {
    return (
        <div className="blog-card">
            <figure>
                <img src={imagem} alt={titulo} />
            </figure>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <a href="#">Saiba mais!</a>
        </div>
    )
}

export default BlogCard;
