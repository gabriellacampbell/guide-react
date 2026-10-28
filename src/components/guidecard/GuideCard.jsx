import "./GuideCard.css";
import {Link} from "react-router-dom";

const GuideCard = ({image, alt, title, description, link}) => {
    return (
        <section className="guide">
            <Link to={link}>
                <img src={image} alt={alt} />
            </Link>

            <div className="guide-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default GuideCard;