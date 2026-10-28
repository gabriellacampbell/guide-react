import PageHero from "../../components/pagehero/PageHero";
import activitiesHero from "./images/activitiesHeroImg.png";

const Activties = () => {
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
        </main>
    )
}

export default Activties