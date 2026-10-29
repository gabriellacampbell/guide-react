import "./ClothingInfo.css"

const ClothingInfo = ({title, children}) => {
    return(
        <section className="clothing-info-card">
            <h3>{title}</h3>
            <ul>{children}</ul>
        </section>
    )
}

export default ClothingInfo