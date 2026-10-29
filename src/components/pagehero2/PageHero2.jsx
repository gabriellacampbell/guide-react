import "./PageHero2.css"

const PageHero2 = ({image, title, description}) => {
    return(
        <section className="page-hero">
            
            <div className="page-hero-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </section>
    )
}

export default PageHero2