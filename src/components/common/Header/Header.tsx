
import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../assets/logo.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className="container header-container">

                    <div className="header-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo-kl" />
                        </Link>
                    </div>

                    <nav className="header-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/accommodation">Accommodation</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>


                    <Link to="/contact" className="header-cta">
                        Book Now
                    </Link>

                    {/* Mobile Toggle */}
                    <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
                        <FiMenu />
                    </div>

                </div>
            </header>

            {/* SIDEBAR */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <div className="mobile-menu-header">
                    <span>Menu</span>
                    <FiX onClick={() => setMenuOpen(false)} />
                </div>

                <nav>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/menu" onClick={() => setMenuOpen(false)}>Meals</Link>
                    <Link to="/accommodation" onClick={() => setMenuOpen(false)}>Accommodation</Link>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>

                <Link to="/contact" className="mobile-cta">
                    Book Now
                </Link>
            </div>

            {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
};

export default Header;