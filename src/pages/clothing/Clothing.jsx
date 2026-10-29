import "./Clothing.css"
import PageHero2 from "../../components/pagehero2/PageHero2"
import OutfitInspo from "../../components/outfitInspo/OutfitInspo"
import ClothingInfo from "../../components/clothingInfo/ClothingInfo"
import gamedayImage from "./images/outfit1.jpg"
import goingoutImage from "./images/gooutfit1.png"
import professionalImage from "./images/proutfit1.png"

const Clothing= () =>{
    return(
        <main>

            <PageHero2
                title="The Ultimate USC Clothing Guide"
                description="Not sure what to wear? From gamedays and nights out to interviews and professional events, find outfit inspiration for every occasion."
            />

            <section className="clothing-outfits">
                <div className="clothing-outfit-grid">
                    <OutfitInspo
                        title="Gameday Inspiration"
                        image={gamedayImage}
                        alt="Gameday outfit inspiration"
                    />

                    <OutfitInspo
                        title="Going Out Inspiration"
                        image={goingoutImage}
                        alt="Going out outfit inspiration"
                    />

                    <OutfitInspo
                        title="Professional Clothing"
                        image={professionalImage}
                        alt="Professional outfit inspiration"
                    />
                </div>
            </section>

            <section className="clothing-info">
                <ClothingInfo title="Rental Pages">
                    <li>
                        <a href="https://www.rentsodacity.shop/">
                            Rent Sodacity
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sc.rental.closet/">
                            SC Rental Closet
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/uscrentalss/">
                            USC Rentals
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/therowrentals/">
                            The Row Rentals
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gamecockrents/">
                            Gamecock Rents
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sc.rental.closet/">
                            SC Rentals
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gamecockrents/">
                            Gamecock Clothing
                        </a>
                    </li>
                </ClothingInfo>

                <ClothingInfo title="Business Casual">
                    <li>Blouses, knit tops, sweaters, or modest professional shirts</li>
                    <li>Dress pants, slacks, ankle pants, or a knee-length/midi skirt</li>
                    <li>A casual dress that is not too short, tight, or low-cut</li>
                    <li>Closed-toe flats, loafers, clean dress shoes, or low heels</li>
                    <li>A blazer, cardigan, or light jacket if you want an extra-professional look</li>
                </ClothingInfo>

                <ClothingInfo title="Business Professional">
                    <li>A matching pantsuit or skirt suit in neutral colors like black, navy, gray, or beige</li>
                    <li>A polished blouse or button-up shirt under the blazer</li>
                    <li>Dress pants or a knee-length/midi pencil or A-line skirt</li>
                    <li>Closed-toe pumps, flats, or low heels in a neutral color</li>
                    <li>Minimal jewelry and a structured handbag or tote</li>
                </ClothingInfo>
            </section>


        </main>
    )
}

export default Clothing