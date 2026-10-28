import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id = "main-footer">
                <div>
                    <h1>The Gamecock Guide</h1>
                    <p>Learn to live like a Gamecock.</p>
                    <p>&copy; The Gamecock Guide</p>
                </div>

                <nav aria-label="Footer navigation">
                    <ul>
                        <li><Link to= "/">Home</Link></li>
                        <li><Link to="/activities">Activities</Link></li>
                        <li><Link to="/nightlife">Nightlife</Link></li>
                        <li><Link to="/clothing">Clothing</Link></li>
                        <li><Link to="/housing">Housing</Link></li>
                    </ul>
                </nav>
        </footer>
    );
};
export default Footer;