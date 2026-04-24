import React from "react";
import "./Footer.css";

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
                        <img src="src/assets/logo.png" alt="Logo" className="logo-footer-img" />
                    </div>
                </div>

                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h4>Company</h4>
                    <a href="/">Home</a>
                    <a href="/about">About us</a>
                    <a href="/accommodation">Accommodation</a>
                    <a href="/menus">Menus</a>
                    <a href="/gallery">Gallery</a>
                </div>

                <div
                    className="footer-col"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h4>My Account</h4>
                    <a href="#">Teams & Conditions</a>
                    <a href="#">Contact us</a>
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

            {/* Bottom */}
            <div
                className="footer-bottom"
                // data-aos="fade-up"
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