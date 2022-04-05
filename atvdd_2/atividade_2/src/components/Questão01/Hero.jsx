function Hero({ name, img }) {
    return(
        <>
        <p>My name is {name} </p>
        <img src={img} />
        </>
    )
}

export default Hero