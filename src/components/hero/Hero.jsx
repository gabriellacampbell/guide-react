import "./Hero.css"
import palmTree from "./images/pt.png"

const Hero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero-text">
                <h2>The Ultimate Guide to USC!</h2>
                <p>
                    Welcome to your guide to life at the University of
                    South Carolina! Whether you're a new student trying
                    to find your way around Columbia or a current Gamecock
                    looking for something new to do, this is your go-to
                    guide for making the most of your time at USC.
                    From the best places to go out and things to do
                    around the city to navigating off-campus living and
                    finding the perfect outfit for gamedays and events,
                    we've got you covered. Explore, have fun, and make
                    the most of your Carolina experience!
                </p>
            </div>
            <img
                className="home-hero-palm"
                src={palmTree}
                alt="Palm tree"
            />
        </section>
    )
}

export default Hero