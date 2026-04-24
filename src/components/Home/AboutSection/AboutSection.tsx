import React, { useState } from "react";
import "./AboutSection.css";

type TabType = "mission" | "vision" | "value";

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>("mission");

    const tabContent = {
        mission: {
            title: "Our Mission",
            points: [
                "Deliver fresh, hygienic meals daily through our managed kitchen",
                "Provide safe, affordable dormitory stays for students & professionals",
                "Maintain consistency in food quality, comfort, and service reliability"
            ],
            img: "https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg"
        },
        vision: {
            title: "Our Vision",
            points: [
                "Build a trusted ecosystem for food and accommodation",
                "Expand kitchen and dorm services across multiple locations",
                "Become a dependable daily-life solution for urban living"
            ],
            img: "https://placehold.co/150x120"
        },
        value: {
            title: "Our Value",
            points: [
                "Hygiene-first kitchen and living standards",
                "Customer comfort and safety as priority",
                "Transparent pricing with consistent service quality"
            ],
            img: "https://placehold.co/150x120"
        }
    };

    const current = tabContent[activeTab];

    return (
        <section className="about-section ">
            <div className="container about-container">

                {/* LEFT */}
                <div
                    className="about-images"
                    data-aos="fade-right"
                >
                    <div className="image-main">
                        <img
                            src="https://jehsnest.com/wp-content/uploads/2023/11/DSC08406-copy-768x512.jpg"
                            alt="kitchen and dorm"
                        />
                    </div>

                    <div
                        className="image-overlay"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <img src="src/assets/owner.jpeg" alt="owner" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="about-content">

                    <h2 data-aos="fade-up">
                        Fresh Food & <span>Comfortable Stay</span> <br />
                        Designed For Everyday Living
                    </h2>

                    <p
                        className="about-desc"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        We combine a professionally managed kitchen with safe and
                        well-maintained dormitory spaces. From daily meals to
                        comfortable living, everything is designed to simplify your
                        routine with consistency, hygiene, and care.
                    </p>

                    {/* Tabs */}
                    <div
                        className="about-tabs"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <span
                            className={activeTab === "mission" ? "active" : ""}
                            onClick={() => setActiveTab("mission")}
                        >
                            Our Mission
                        </span>

                        <span
                            className={activeTab === "vision" ? "active" : ""}
                            onClick={() => setActiveTab("vision")}
                        >
                            Our Vision
                        </span>

                        <span
                            className={activeTab === "value" ? "active" : ""}
                            onClick={() => setActiveTab("value")}
                        >
                            Our Value
                        </span>
                    </div>

                    {/* Content */}
                    <div
                        className="about-feature"
                        key={activeTab}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img src={current.img} alt={current.title} />

                        <div>
                            <h4>{current.title}</h4>
                            <ul>
                                {current.points.map((point, i) => (
                                    <li key={i}>✔ {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p
                        className="about-bottom"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Our focus is simple—reliable food, clean living spaces,
                        and a system you can depend on every single day.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;