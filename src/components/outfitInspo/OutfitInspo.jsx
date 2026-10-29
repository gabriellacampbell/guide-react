import "./OutfitInspo.css"

const OutfitInspo = ({title, image, alt}) => {
    return(
        
        <section className="outfit-inspo">
            <h3>{title}</h3>
            <img src={image} alt={alt} />
        </section>
    )
}

export default OutfitInspo