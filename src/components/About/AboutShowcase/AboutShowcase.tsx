import React from "react";
import {
    BedDouble,
    ShieldCheck,
    Utensils,
    ArrowUpRight
} from "lucide-react";

import "./AboutShowcase.css";

const AboutShowcase: React.FC = () => {

    return (
        <section className="about-section">

            <div className="container">

                {/* TOP SECTION */}
                <div className="top-section">

                    {/* LEFT IMAGE */}
                    <div className="left-image">

                        <img
                            src="/images/IMG_2016_.jpg"
                            alt="Dormitory room"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="right-content">

                        <span className="about-tag">
                            About Jeh's Nest
                        </span>

                        <h2>
                            Fresh Meals,
                            <br />
                            Comfortable Living
                            <br />
                            Under One Roof
                        </h2>

                        <p>
                            Jeh’s Nest combines safe dormitory accommodation
                            with hygienic home-style food for students and
                            working professionals. Our focus is to create
                            a comfortable and community-driven living experience.
                        </p>

                        <div className="stats-row">

                            <div className="stat-card">

                                <h3>500+</h3>

                                <span>
                                    Meals Served Daily
                                </span>

                            </div>

                            <div className="stat-card">

                                <h3>300+</h3>

                                <span>
                                    Active Customers
                                </span>

                            </div>

                        </div>

                        <button className="about-btn">

                            Explore Rooms

                            <ArrowUpRight size={18} />

                        </button>

                    </div>

                </div>

                {/* BOTTOM GRID */}
                <div className="bottom-grid">

                    {/* CARD 1 */}
                    <div className="feature-card">

                        <div className="feature-icon">
                            <BedDouble className="icon" />
                        </div>

                        <div className="feature-content">

                            <h4>
                                Comfortable Living
                            </h4>

                            <p>
                                Spacious and clean rooms designed
                                for peaceful and comfortable stays.
                            </p>

                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className="feature-card image-card">

                        <img
                            src="/images/5DGT2186_.jpg"
                            alt="Healthy food"
                        />

                    </div>

                    {/* CARD 3 */}
                    <div className="feature-card">

                        <div className="feature-icon">
                            <Utensils className="icon" />
                        </div>

                        <div className="feature-content">

                            <h4>
                                Healthy Meals
                            </h4>

                            <p>
                                Freshly prepared meals with premium
                                ingredients and strict hygiene standards.
                            </p>

                        </div>

                    </div>

                    {/* CARD 4 */}
                    <div className="feature-card dark-card">

                        <span className="experience-tag">
                            Experience
                        </span>

                        <h3>
                            10+
                        </h3>

                        <p>
                            Years of trusted hospitality and food service experience.
                        </p>

                    </div>

                    {/* CARD 5 */}
                    <div className="feature-card">

                        <div className="feature-icon">
                            <ShieldCheck className="icon" />
                        </div>

                        <div className="feature-content">

                            <h4>
                                Safe & Secure
                            </h4>

                            <p>
                                Professionally managed spaces with
                                strong safety and hygiene systems.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutShowcase;