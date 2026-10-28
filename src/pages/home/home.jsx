import "./home.css";
import Hero from "../../components/hero/Hero";
import GuideCard from "../../components/guidecard/GuideCard";
import nightlifeImage from "./images/nightlife.png";
import activitiesImage from "./images/activities.png";
import housingImage from "./images/housing.png";
import clothingImage from "./images/clothing.png";
import About from "../../components/about/About";

const Home = () => {
    return (
        <div id = "home">

            <Hero />
            
            <section id="guides">

                <h2>Click on an image to explore!</h2>

                <div className="columns">
                    <GuideCard
                        image={nightlifeImage}
                        alt="Nightlife in Columbia"
                        title="Discover Night Life!"
                        description="Click on the image to be take to a custom guide fit for gamecocks to explore night life in Columbia!"
                        link="/nightlife"
                    />
                    <GuideCard
                        image={activitiesImage}
                        alt="Activities in Columbia"
                        title="Find things to do!"
                        description="Click on the image to discover what you can fill your free time with in and around the city."
                        link="/activities"
                    />
                    <GuideCard
                        image={housingImage}
                        alt="Student housing"
                        title="Find your Home!"
                        description="Click on the image to be taken to a guide of apartment options close to campus."
                        link="/housing"
                    />
                    <GuideCard
                        image={clothingImage}
                        alt="Clothing and outfit ideas"
                        title="Plan your Outfit!"
                        description="Click on the image to be taken to a wardrobe guide fit for Gamecocks."
                        link="/clothing"
                    />
                </div>
            </section>

            <About />

        </div>
    )
}

export default Home;