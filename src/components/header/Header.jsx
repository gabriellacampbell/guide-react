import "./Header.css";
import logo from "./images/logo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className = "header-brand">
                <img className="header-logo" src={logo} alt="logo" />
                <h1>The Gamecock Guide</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;