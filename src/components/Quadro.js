export const Quadro = ({size, personagem, url}) => {
    return (
        <>
            <div>
                <Imagem
                    size={size}
                    url={url}
                ></Imagem>
                <h2>{personagem.nome}</h2>
            </div>
        </>
    )
}


const Imagem = ({url, size}) => {
    return (
        <img
            width={size}
            height={size}
            src={url}
        />
    )
}