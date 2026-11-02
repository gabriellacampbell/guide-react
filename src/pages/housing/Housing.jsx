
import PageHero2 from "../../components/pagehero2/PageHero2"
import List from "../../components/list/List"
import HousingResources from "../../components/housingResources/HousingResources"
import "./Housing.css"
import millsImage from "./images/damills.jpg"
import standardImage from "./images/apt2.webp"
import greeneImage from "./images/apt3.jpg"
import assemblyImage from "./images/a4.jpg"
import parkImage from "./images/apt5.jpg"
import stadiumImage from "./images/a6.avif"

const Housing = () => {
    return(
         <main>
            <PageHero2
                title="Student Housing Guide"
                description="Thinking about moving off campus? 
                Finding the right place to live can feel overwhelming, 
                but it doesn’t have to be. This guide covers some of the most 
                popular areas and housing options around USC, along with things 
                to consider when choosing an apartment, finding roommates, 
                and preparing for life on your own. Use these tips to find a place 
                that feels like home while staying close to everything Carolina has to offer."
            />

            <section className="housing-map" aria-label="Apartment map">
                <iframe
                    className="housing-map-frame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26463.268325347966!2d-81.06661319732669!3d33.994882887139305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb222ef131ed%3A0xeacf03dc9dd72d18!2sThe%20Mills!5e0!3m2!1sen!2sus!4v1791170354011!5m2!1sen!2sus"
                    title="Map of The Mills near USC"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </section>

            <section id="apartments" aria-label="Student apartments">
                <div className="housing-grid">
                    <List
                        image={millsImage}
                        alt="The Mills"
                        title="The Mills"
                        description="Winner of the Best Apartment Community in Columbia for 10 years & counting! Has loads of amenities to keep you entertained."
                        link="https://www.pmcpropertygroup.com/properties/olympia-mill"
                    />

                    <List
                        image={standardImage}
                        alt="The Standard at Columbia"
                        title="The Standard at Columbia"
                        description="With a myriad of on-site amenities, several spacious floor plans, and a central, convenient location, it’s no wonder why students love living in our apartments near UofSC!"
                        link="https://www.thestandardcolumbia.com/"
                    />

                    <List
                        image={greeneImage}
                        alt="Greene Crossing"
                        title="Greene Crossing"
                        description="Fully furnished student apartments near USC with modern amenities and a great community feel. Additionally, it is located in a prime area with easy access to campus and local attractions."
                        link="https://www.greenecrossing.com/"
                    />

                    <List
                        image={assemblyImage}
                        alt="The Assembly"
                        title="The Assembly"
                        description="Fully renovated and ready for you. Fresh spaces, upgraded amenities, and a whole new vibe, all one block from USC."
                        link="https://www.assemblycolumbia.com/"
                    />

                    <List
                        image={parkImage}
                        alt="The Park"
                        title="The Park"
                        description="The Park Is Now Open to All Students! No university housing assignment required!"
                        link="https://www.theparkcsc.com/"
                    />

                    <List
                        image={stadiumImage}
                        alt="Stadium Suites"
                        title="Stadium Suites"
                        description="Welcome to Stadium Suites—where comfort, community, and college life collide."
                        link="https://www.scsuites.com/"
                    />
                </div>
            </section>

            <HousingResources />
            
        </main>
    )
}

export default Housing