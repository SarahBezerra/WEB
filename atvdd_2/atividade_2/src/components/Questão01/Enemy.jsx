function Enemy({ name, img }) {
    return(
        <>
        <h2>My name is {name} </h2>
        <img src={img} alt="Imagem do Coringa" />
        </>
    )
}

export default Enemy