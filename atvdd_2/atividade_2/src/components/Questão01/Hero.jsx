function Hero({ name, img }) {
    return(
        <>
        <h2>My name is {name} </h2>
        <img src={img} alt="Imagem do Batman" />
        </>
    )
}

export default Hero