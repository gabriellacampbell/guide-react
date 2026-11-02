import "./Navigation.css"
import {useState} from "react"
import {Link} from "react-router-dom"

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="main-nav">
            <button
                id="toggle-nav"
                type="button"
                onClick={toggleNav}
                aria-expanded={menuOpen}
                aria-controls="navigation-links"
                aria-label="Toggle navigation"
            >
                {menuOpen ? "⌃" : "⌄"}
            </button>

            <ul
                id="navigation-links"
                className={menuOpen ? "" : "hide-small"}
            >

                <li><Link to= "/">Home</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/nightlife">Nightlife</Link></li>
                <li><Link to="/clothing">Clothing</Link></li>
                <li><Link to="/housing">Housing</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation