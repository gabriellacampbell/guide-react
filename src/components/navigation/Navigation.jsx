import "./Navigation.css";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/nightlife">Nightlife</Link></li>
                <li><Link to="/clothing">Clothing</Link></li>
                <li><Link to="/housing">Housing</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;