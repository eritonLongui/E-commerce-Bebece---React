import './index.scss'

function Categoria({ data }) {
    return (
        <div className="categoria">
            <div>
                <img src={data.imagem} alt={`Foto de categoria - ${data.nome}`} />
                <p>{data.nome}</p>
            </div>
        </div>
    )
}

export default Categoria;
