import React from "react";
import { BedDouble, ShieldCheck, Utensils } from "lucide-react";
import "./AboutShowcase.css";

const AboutShowcase: React.FC = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="wrapper">

                    {/* TEXT */}
                    <div className="one" data-aos="fade-right">
                        <span className="about-tag">About Us</span>

                        <h2 data-aos="fade-up" data-aos-delay="100">
                            Comfortable Dormitory <br />
                            & Homely Food Solutions
                        </h2>

                        <p data-aos="fade-up" data-aos-delay="200">
                            We provide safe, clean, and affordable dormitory
                            living along with fresh home-style meals. Designed
                            for students and working professionals, our space
                            focuses on comfort, hygiene, and peace of mind.
                        </p>
                    </div>

                    {/* BIG IMAGE */}
                    <div className="two" data-aos="fade-left">
                        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" />
                    </div>

                    {/* SMALL IMAGE */}
                    <div className="three" data-aos="zoom-in" data-aos-delay="200">
                        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" />
                    </div>

                    {/* EXPERIENCE */}
                    <div className="four" data-aos="fade-up" data-aos-delay="300">
                        <h3>10+</h3>
                        <span>Years of Experience</span>

                        <button className="about-btn">
                            Explore Rooms →
                        </button>
                    </div>

                    {/* FEATURES */}
                    <div className="five" data-aos="fade-up" data-aos-delay="400">
                        <BedDouble className="icon" />
                        <h4>Comfortable Living</h4>
                        <p>Clean, ventilated rooms designed for daily comfort.</p>
                    </div>

                    <div className="six" data-aos="fade-up" data-aos-delay="500">
                        <Utensils className="icon" />
                        <h4>Healthy Meals</h4>
                        <p>Fresh home-style food served daily with hygiene.</p>
                    </div>

                    <div className="seven" data-aos="fade-up" data-aos-delay="600">
                        <ShieldCheck className="icon" />
                        <h4>Safe & Secure</h4>
                        <p>Separate spaces with proper safety and management.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutShowcase;