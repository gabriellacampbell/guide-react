import "./About.css"
import students from "./images/08-student-experience-sports-fountain.jpg"

const About = () => {
    return(
        <section id="about">
            <div className="about-text">
                <p className="about-label">
                    USC • COLUMBIA • GAMECOCK LIFE
                </p>
                <h2>
                    For Gamecocks,<br />by Gamecocks
                </h2>
                <p>
                    This guide was created to help students make the most
                    of their time at the University of South Carolina and
                    in Columbia. From finding the right place to live and
                    discovering things to do around the city to figuring
                    out what to wear and where to go on a night out, this
                    site brings together the information students need to
                    experience life beyond the classroom. Whether you’re
                    new to Carolina or just looking for something new to
                    explore, consider this your guide to living, exploring,
                    and making the most of your time as a Gamecock.
                </p>
            </div>

            <div className="about-image">
                <img
                    id="students"
                    src={students}
                    alt="Students celebrating in a fountain"
                />
                <p>Life as a Gamecock</p>
            </div>

        </section>
    )
}

export default About