function Hero({ name, img }) {
    return(
        <>
        <h1>My name is {name} </h1>
        <img src={img} />
        </>
    )
}

export default Hero