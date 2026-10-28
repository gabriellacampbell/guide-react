import "./PageHero.css";

const PageHero = ({image, title, description}) => {
    return (
        <section className="page-hero">

            <img className="page-hero-img" src={image} alt="hero img"/>

            <div className="page-hero-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </section>
    )
}

export default PageHero;