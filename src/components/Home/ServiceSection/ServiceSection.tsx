import React from "react";
import "./ServiceSection.css";

const services = [
    {
        title: "Tiffin Service",
        desc: "Daily fresh home-style meals delivered with consistency, hygiene, and balanced nutrition.",
        img: "https://images.pexels.com/photos/28939337/pexels-photo-28939337.jpeg"
    },
    {
        title: "Central Kitchen",
        desc: "Fully managed kitchen operations ensuring quality cooking, bulk preparation, and timely delivery.",
        img: "https://images.pexels.com/photos/18177444/pexels-photo-18177444.jpeg"
    },
    {
        title: "Men’s Dormitory",
        desc: "Safe and affordable stay designed for working professionals and students with essential facilities.",
        img: "https://images.pexels.com/photos/35531303/pexels-photo-35531303.jpeg"
    },
    {
        title: "Women’s Dormitory",
        desc: "Secure and comfortable living spaces with proper hygiene, privacy, and daily support services.",
        img: "https://images.pexels.com/photos/35165103/pexels-photo-35165103.jpeg"
    }
];

const ServiceSection: React.FC = () => {
    return (
        <section className="service-section section-alt">
            <div className="container">

                {/* TOP */}
                <div className="service-top">
                    <h2 data-aos="fade-up">
                        Complete Food & Stay Solutions <br />
                        Designed For Your Daily Comfort
                    </h2>

                    <div
                        className="service-top-right"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p>
                            From fresh daily meals to safe and comfortable dormitory stays,
                            we manage everything so you don’t have to.
                        </p>
                        <a href="#">Explore services</a>
                    </div>
                </div>

                {/* LIST */}
                <div className="service-list">
                    {services.map((item, index) => (
                        <div
                            className="service-row"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            {/* LEFT */}
                            <div className="service-left">
                                <p>{item.desc}</p>
                            </div>

                            {/* IMAGE */}
                            <div className="service-image">
                                <img src={item.img} alt={item.title} />
                            </div>

                            {/* TITLE */}
                            <div className="service-title">
                                <h3>{item.title}</h3>
                            </div>

                            {/* RIGHT ARROW */}
                            <div className="service-arrow">
                                <a href="#" className="arrow-btn">
                                    <span>↗</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;