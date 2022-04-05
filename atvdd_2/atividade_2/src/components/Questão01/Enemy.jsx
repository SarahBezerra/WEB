function Enemy({ name, img }) {
    return(
        <>
        <p>My name is {name} </p>
        <img src={img} />
        </>
    )
}

export default Enemy