import React from "react";
import "./ExperienceSection.css";

const steps = [
    { id: "01", title: "Select Your Meal Plan", img: "https://images.pexels.com/photos/16074401/pexels-photo-16074401.jpeg" },
    { id: "02", title: "We Cook Fresh Daily", img: "https://images.pexels.com/photos/21077136/pexels-photo-21077136.jpeg" },
    { id: "03", title: "Packed Hygienically", img: "https://images.pexels.com/photos/29795381/pexels-photo-29795381.jpeg" },
    { id: "04", title: "Delivered On Time", img: "https://images.pexels.com/photos/17736978/pexels-photo-17736978.jpeg" }
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
                            From preparation to delivery, every step is handled with care,
                            hygiene, and consistency to give you reliable daily meals.
                        </p>
                        <a href="#">Explore meal plans</a>
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
                            src="https://images.pexels.com/photos/19553654/pexels-photo-19553654.jpeg"
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
                            Our kitchen prepares fresh meals daily using quality ingredients
                            and consistent processes. Every tiffin is designed to give you
                            balanced nutrition, taste, and reliability—without the hassle of cooking.
                        </p>

                        <div
                            className="exp-testimonial"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img src="https://images.pexels.com/photos/8511810/pexels-photo-8511810.jpeg" alt="chef" />

                            <div className="exp-testimonial-text">
                                <p>
                                    We focus on delivering food that feels like home—simple,
                                    fresh, and consistent every single day.
                                </p>
                                <h5>
                                    Kitchen Team <span>Food Operations</span>
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