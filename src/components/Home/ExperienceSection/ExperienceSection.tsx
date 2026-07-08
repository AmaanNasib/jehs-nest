import React from "react";
import "./ExperienceSection.css";

const steps = [
    { id: "01", title: "Select Your Meal Plan", img: "src/assets/images/IMG_1937.JPG" },
    { id: "02", title: "We Cook Fresh Daily", img: "src/assets/images/IMG_2086_.jpg" },
    { id: "03", title: "Packed Hygienically", img: "src/assets/images/5DGT2400.JPG" },
    { id: "04", title: "Delivered On Time", img: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.38 PM.jpeg" }
];

const ExperienceSection: React.FC = () => {
    return (
        <section className="experience-section">
            <div className="container">

                {/* TOP */}
                <div className="exp-top">
                    <h2 data-aos="fade-up">
                        Fresh Kitchen Meals <br />
                        Made For Your Daily Routine
                    </h2>

                    <div
                        className="exp-right"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p>
                            Every meal at Jeh’s Kitchen follows a carefully managed process to ensure freshness, hygiene, consistency, and timely delivery.                        </p>
                        <a href="#">Start Your Meal Plan</a>
                    </div>
                </div>

                {/* STEPS */}
                <div className="exp-steps">
                    {steps.map((step, index) => (
                        <div
                            className="exp-step"
                            key={step.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="step-img"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100 + 100}
                            >
                                <img src={step.img} alt={step.title} />
                                <span>{step.id}</span>
                            </div>
                            <p>{step.title}</p>
                        </div>
                    ))}
                </div>

                {/* BOTTOM */}
                <div className="exp-bottom">

                    {/* 🔥 IMAGE WITH GUIDANCE */}
                    <div
                        className="exp-image"
                        data-aos="fade-up"
                    >
                        <img
                            src="src/assets/images/IMG_2085.JPG"
                            alt="tiffin meal"
                        />
                    </div>

                    <div className="exp-content">

                        <h3 data-aos="fade-up">
                            Simple, Reliable <br />
                            Home-Style Meals
                        </h3>

                        <p
                            className="exp-desc"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Jeh’s Kitchen uses fresh vegetables, premium ingredients, standardized SOPs, and strict hygiene protocols to deliver healthy and consistent meals every day.
                        </p>

                        <div
                            className="exp-testimonial"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img src="src/assets/images/IMG_1805.JPG" alt="chef" />

                            <div className="exp-testimonial-text">
                                <p>
                                    Fresh food, timely delivery, and homely taste  Jeh’s Kitchen has become part of my daily routine.
                                </p>
                                <h5>
                                    Neha Sharma <span>Working Professional</span>
                                </h5>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;