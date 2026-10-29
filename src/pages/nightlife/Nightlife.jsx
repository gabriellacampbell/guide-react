import PageHero from "../../components/pagehero/PageHero"
import NightlifeHero from "./images/generate_image_02.png"
import BarInfo from "../../components/barInfo/BarInfo"
import "./Nightlife.css"
import List from "../../components/list/List"
import tinroofImage from "./images/tinroof.jpg"
import luckysImage from "./images/luckys.jpg"
import chickenImage from "./images/chicken.jpg"
import jakesImage from "./images/jakes.jpg"
import socialImage from "./images/social.jpg"
import groupImage from "./images/group.jpg"
import saloonImage from "./images/saloon.jpg"
import saltyImage from "./images/salty.jpg"

const Nightlife = () => {
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
                />

                <BarInfo
                    title="Five Points"
                    link="https://fivepointscolumbia.com/"
                    description="Five Points is one of Columbia’s most popular nightlife areas, especially for USC students. The neighborhood has a mix of restaurants, live music, sports bars, and late-night spots, so it is easy to find something for different groups and moods. Bars and venues in the area include Social, Group Therapy, Luckys, Chicken on a Stick, Publico, Jake’s Bar & Grill, and CJ’s of Five Points."
                />

                <BarInfo
                    title="Frat Lots"
                    link="https://fraternitylot.com/"
                    description="The Fraternity Lot is a private game-day tailgating area near USC where many fraternity organizations gather before football games. It is not open to the general public, so students should check entry rules and wristband requirements before making plans."
                />
            </section>

            <section className="nightlife-bars">
                <h2>Bars in Columbia</h2>

                <div className="nightlife-bars-grid">
                    <List
                        image={tinroofImage}
                        alt="The Tin Roof"
                        title="The Tin Roof"
                        description="1022 Senate Street, Columbia, SC. Live music bar. A casual spot for food, drinks, and live music."
                        link="#"
                    />

                    <List
                        image={luckysImage}
                        alt="Luckys"
                        title="Luckys"
                        description="2100 Devine St, Columbia, SC. College nightlife bar. A popular Five Points stop for students looking for a lively night out."
                        link="#"
                    />

                    <List
                        image={chickenImage}
                        alt="Chicken on a Stick"
                        title="Chicken on a Stick"
                        description="724 Harden St, Columbia, SC. Bar and grill. A casual Five Points spot known for chicken on a stick, drinks, and late-night food."
                        link="#"
                    />

                    <List
                        image={jakesImage}
                        alt="Jakes"
                        title="Jakes"
                        description="2112 Devine St, Columbia, SC. Neighborhood bar and grill. A relaxed Five Points bar with craft beer, bar food, and a dog-friendly patio."
                        link="#"
                    />

                    <List
                        image={socialImage}
                        alt="Social"
                        title="Social"
                        description="632 Harden St, Columbia, SC. Sports bar and entertainment venue. A Gamecock-owned Five Points venue for food, drinks, sports, music, and nightlife."
                        link="#"
                    />

                    <List
                        image={groupImage}
                        alt="Group Therapy"
                        title="Group Therapy"
                        description="2107 Greene St, Columbia, SC. Neighborhood nightlife bar. A longtime Five Points bar with a casual setting for drinks and nights out with friends."
                        link="#"
                    />

                    <List
                        image={saloonImage}
                        alt="Saloon"
                        title="Saloon"
                        description="812 Harden St, Columbia, SC. Late-night bar. A lively Five Points bar that is a popular stop for students and groups."
                        link="#"
                    />

                    <List
                        image={saltyImage}
                        alt="The Salty Nut"
                        title="The Salty Nut"
                        description="2000A Greene St, Columbia, SC. Restaurant and bar. A relaxed Five Points restaurant and bar near campus with food, drinks, and outdoor seating."
                        link="#"
                    />
                </div>
            </section>

        </main>
    )
}

export default Nightlife