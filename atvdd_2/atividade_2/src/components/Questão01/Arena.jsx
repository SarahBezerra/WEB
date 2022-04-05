import Enemy from "./Enemy";
import Hero from "./Hero";

function Arena() {
    const batmanImageLink = "https://hbomax-images.warnermediacdn.com/images/GYA7uMgo_tkHDwwEAAAAE/tile?size=640x360&partner=hbomaxcom&v=3c8b50bc75e0968f7736cf4e7e04dd28&language=pt-br&host=art-gallery.api.hbo.com"
    const coringaImageLink = "https://uareva.com/wp-content/uploads/2016/08/Animated-joker.jpg"
    
    return(
        <div>
            <Hero name="Batman" img={batmanImageLink} />
            <Enemy name="Coringa" img={coringaImageLink} />
        </div>
    )
}

export default Arena