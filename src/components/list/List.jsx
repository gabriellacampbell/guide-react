import "./List.css"

const List = ({image, alt, title, description, link}) => {
    return (
        <article className="listing-card">

            <a href={link}>
                <img src={image} alt={alt}/>
            </a>

            <div className="listing-card-text">
                <h3><a href={link}>{title}</a></h3>
                <p>{description}</p>
            </div>

        </article>
    )
}
export default List