import Arena from "./Arena"
import Enemy from "./Enemy"
import Hero from "./Hero"
import imagesLinks from "../imageLinks"

function World() {

    const { batmanImageLink, 
            coringaImageLink, 
            supermanImageLink, 
            lexImageLink, 
            florzinhaImageLink, 
            macacoImageLink 
    } = imagesLinks;

    return(
        <>
        <h1>Earth</h1>
        <Arena arena="Gotham">
            <Hero name="Batman" img={batmanImageLink} />
            <Enemy name="Coringa" img={coringaImageLink} />
        </Arena>

        <Arena arena="Metrópolis">
            <Hero name="Superman" img={supermanImageLink} />
            <Enemy name="Lex Luthor" img={lexImageLink} />
        </Arena>

        <Arena arena="Townsville">
            <Hero name="Florzinha" img={florzinhaImageLink} />
            <Enemy name="Macaco Louco" img={macacoImageLink} />
        </Arena>
        </>
    )
}

export default World