import "./BarInfo.css"

const BarInfo = ({title, description, link, map})=>{
    return(
        <section className="bar-info">
            <h3>
                <a href={link}>{title}</a>
            </h3>

            <p>{description}</p>

            <div className="bar-info-placeholder">
                <iframe
                    src={map}
                    title={`${title} map`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        </section>
    )
}

export default BarInfo