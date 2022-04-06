function Hero({ name, img }) {
    return(
        <>
        <h2>Hero: {name} </h2>
        <img src={img} alt="Imagem do Batman" />
        </>
    )
}

export default Hero