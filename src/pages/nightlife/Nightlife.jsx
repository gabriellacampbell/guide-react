import PageHero from "../../components/pagehero/PageHero"
import NightlifeHero from "./images/generate_image_02.png"
import BarInfo from "../../components/barInfo/BarInfo"
import "./Nightlife.css"
import List from "../../components/list/List"
import {useState, useEffect} from "react"

const serverURL = "https://thegamecockguide-backend-m1fk.onrender.com"

const Nightlife = () => {
    const [bars, setBars] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const getBars = async () =>{
            try {
                const response = await fetch(serverURL + "/api/bars")

                if(!response.ok){
                    throw new Error("Could not load bars")
                }

                const data = await response.json()
                setBars(data)
            } catch(error) {
                setError("The bars could not be loaded. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        getBars()
    }, [])
    return(
        <main>
            <PageHero
                image={NightlifeHero}
                title="Nightlife"
                description="When the school day is over, Columbia has plenty of ways to unwind and have fun. From popular spots around Five Points and The Vista to late-night food, entertainment, and places to hang out with friends, there’s something for everyone. Explore this guide to find fun things to do after class and make the most of your time outside of the classroom."
            />

            <section
                className="nightlife-areas"
                aria-label="Nightlife areas"
            >
                <BarInfo
                    title="Vista Union"
                    link="https://www.vistaunion.com/"
                    description="Vista Union is a restaurant and nightlife spot in the Vista that is great for dinner, craft cocktails, and spending time with friends. Its billiard room makes it a fun option for groups looking for something more than just a typical bar. Bars and venues in the area include Beach Bar & Grill, Baileys, and Vista"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5834.0980032014095!2d-81.04368035613456!3d33.99981467628758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb75aca40063%3A0x1f3732059cda8bb1!2sThe%20Vista!5e0!3m2!1sen!2sus!4v1791764790888!5m2!1sen!2sus"
                />

                <BarInfo
                    title="Five Points"
                    link="https://fivepointscolumbia.com/"
                    description="Five Points is one of Columbia’s most popular nightlife areas, especially for USC students. The neighborhood has a mix of restaurants, live music, sports bars, and late-night spots, so it is easy to find something for different groups and moods. Bars and venues in the area include Social, Group Therapy, Luckys, Chicken on a Stick, Publico, Jake’s Bar & Grill, and CJ’s of Five Points."
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.297447749225!2d-81.02234870430365!3d34.001555487172034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8baccef53ad9b%3A0xe15467dadc5e53b1!2sFive%20Points%2C%20Columbia%2C%20SC%2029205!5e0!3m2!1sen!2sus!4v1791764414586!5m2!1sen!2sus"
                />

                <BarInfo
                    title="Frat Lots"
                    link="https://fraternitylot.com/"
                    description="The Fraternity Lot is a private game-day tailgating area near USC where many fraternity organizations gather before football games. It is not open to the general public, so students should check entry rules and wristband requirements before making plans."
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23296.327181682373!2d-81.01802496963639!3d33.984316763967904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb74fc1bdec7%3A0x2b0949b900ded09e!2sFraternity%20Lot!5e0!3m2!1sen!2sus!4v1791764885209!5m2!1sen!2sus"
                />
            </section>

            <section className="nightlife-bars">
                <h2>Bars in Columbia</h2>

                {loading && <p role="status">Loading bars...</p>}
                {error && <p role="alert">{error}</p>}

                <div className="nightlife-bars-grid">
                    {bars.map((bar) => (
                        <List
                            key={bar._id}
                            image={serverURL + "/" + bar.img_name}
                            alt={bar.name}
                            title={bar.name}
                            description={`${bar.location}. ${bar.type}. ${bar.description}`}
                            link={bar.link}
                        />
                    ))}
                </div>
            </section>

        </main>
    )
}

export default Nightlife