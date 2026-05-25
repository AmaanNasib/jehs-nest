import React, { useState } from "react";
import owner from "../../../assets/owner.jpeg";
import "./AboutSection.css";

type TabType = "mission" | "vision" | "value";

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>("mission");

    const tabContent = {
        mission: {
            title: "Our Mission",
            points: [
                "Fresh & hygienic meals prepared daily",
                "Comfortable and affordable living spaces",
                "Reliable service with customer-first support"
            ],
            img: "https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg"
        },
        vision: {
            title: "Our Vision",
            points: [
                "Scale high-quality food operations",
                "Build trusted community living spaces",
                "Deliver consistent customer satisfaction"
            ],
            img: "https://placehold.co/150x120"
        },
        value: {
            title: "Our Value",
            points: [
                "Hygiene & Safety First",
                "Quality Ingredients Always",
                "Comfort Through Consistency"
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
                        <img src={owner} alt="owner" />
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
                        Jeh’s Nest is a complete hospitality and managed living solution offering hygienic tiffin services, large-scale catering, and comfortable dormitory accommodation for students and working professionals. We focus on quality, safety, affordability, and everyday comfort.
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
                        Jeh’s Nest combines food, hospitality, and managed living into one dependable ecosystem built for modern urban lifestyles.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;