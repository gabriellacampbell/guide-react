import PageHero from "../../components/pagehero/PageHero";
import activitiesHero from "./images/activitiesHeroImg.png";
import List from "../../components/list/List";
import "./Activities.css";
import zooImage from "./images/activity1.jpg";
import museumImage from "./images/activity2.jpg"
import artMuseumImage from "./images/activity3.jpg"
import parkImage from "./images/activity4.jpg"
import sodaImage from "./images/activity5.jpeg"
import riverImage from "./images/activity6.jpg"
import childrenMuseumImage from "./images/activity7.jpg"
import historicImage from "./images/activity8.webp"
import baseballImage from "./images/activity9.webp"

const Activities = () => {
    return (
        <main>
            <PageHero
                image={activitiesHero}
                title="Columbia, SC Activities"
                description="There’s always something to do in Columbia! 
                Whether you’re looking for a relaxing afternoon outdoors, 
                a fun night with friends, a new place to eat, 
                or something completely different, there’s plenty to explore both on and off campus. 
                Discover some of the best activities, hidden gems, 
                and favorite spots around the University of South Carolina and the Columbia area, 
                and find your next adventure!"
            />

            <section id="activities-list" aria-label="Activities">
                <div className="activities-grid">
                    <List
                        image={zooImage}
                        alt="Riverbanks Zoo entrance"
                        title="Riverbanks Zoo & Gardens"
                        description="See thousands of animals, explore botanical gardens, and enjoy family-friendly exhibits near downtown Columbia."
                        link="https://www.riverbanks.org/"
                    />

                    <List
                        image={museumImage}
                        alt="South Carolina State Museum"
                        title="South Carolina State Museum"
                        description="Explore South Carolina’s art, history, natural history, and science across four floors of exhibits."
                        link="https://scmuseum.org/"
                    />

                    <List
                        image={parkImage}
                        alt="Congaree National Park"
                        title="Congaree National Park"
                        description="Hike through old-growth forest, walk the boardwalk, or paddle through one of South Carolina’s most beautiful natural areas."
                        link="https://www.nps.gov/cong/index.htm"
                    />

                    <List
                        image={artMuseumImage}
                        alt="Columbia Museum of Art"
                        title="Columbia Museum of Art"
                        description="View international art, rotating exhibitions, and creative programs in the heart of downtown."
                        link="https://www.columbiamuseum.org/"
                    />

                    <List
                        image={sodaImage}
                        alt="Soda City Market"
                        title="Soda City Market"
                        description="Spend a Saturday morning browsing local food, art, crafts, and produce on Main Street."
                        link="https://sodacitysc.com/"
                    />

                    <List
                        image={riverImage}
                        alt="Riverfront Park"
                        title="Riverfront Park"
                        description="Walk, run, or bike beside the Columbia Canal and Congaree River while enjoying river views and local history."
                        link="https://parksandrec.columbiasc.gov/riverfront-parks/"
                    />

                    <List
                        image={childrenMuseumImage}
                        alt="EdVenture Children’s Museum"
                        title="EdVenture Children’s Museum"
                        description="Kids can learn through hands-on exhibits, imaginative play, and interactive science activities."
                        link="https://edventure.org/"
                    />

                    <List
                        image={historicImage}
                        alt="Historic Columbia"
                        title="Historic Columbia"
                        description="Take a guided tour of preserved homes and gardens to learn about Columbia’s past."
                        link="https://www.historiccolumbia.org/"
                    />

                    <List
                        image={baseballImage}
                        alt="Baseball park"
                        title="Columbia Fireflies Baseball"
                        description="Catch a fun minor-league baseball game at Segra Park during the season."
                        link="https://www.mlb.com/milb/columbia"
                    />
                </div>
            </section>
        </main>
    )
}

export default Activities