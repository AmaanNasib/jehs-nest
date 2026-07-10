import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">

            <div className="container footer-container">
                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" className="logo-footer-img" />
                    </div>
                </div>

                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h4>Company</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/accommodation">Accommodation</Link>
                    <Link to="/menus">Menus</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>

                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h4>My Account</h4>
                    <Link to="/terms-conditions">Teams & Conditions</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="0"
                >
                    <h4>Contact Info</h4>
                    <p>Hotline free 24/7</p>
                    <h3>+91 98929 39585</h3>
                    <p>Gala no.1, 1st floor, Near Dwarkadha, 90 Feet Rd, opp. Punjab National Bank, Krishna Nagar, Mumbai, Maharashtra 400072</p>
                    <p>booking@jehsnest.com</p>
                </div>

            </div>

            <div
                className="footer-bottom"
                data-aos-delay="400"
            >
                <div className="container footer-bottom-container">
                    <p>© {new Date().getFullYear()} KitchenDorm. All rights reserved.</p>
                    <p>Designed & Developed by Giga Nexus technology</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;