import "./BarInfo.css"

const BarInfo = ({title, description, link})=>{
    return(
        <section className="bar-info">
            <h3>
                <a href={link}>{title}</a>
            </h3>

            <p>{description}</p>

            <div className="bar-info-placeholder">
                <span>{title} iframe coming soon</span>
            </div>
        </section>
    )
}

export default BarInfo