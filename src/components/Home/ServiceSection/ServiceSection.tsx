import React from "react";
import "./ServiceSection.css";

const services = [
    {
        title: "Tiffin Service",
        desc: "Fresh homely meals delivered daily with rotating menus, hygienic packaging, and affordable meal plans.",
        img: "src/assets/images/IMG_1891.JPG"
    },
    {
        title: "Central Kitchen",
        desc: "850 sq ft modern kitchen infrastructure equipped with SS304-grade systems, quality control, and advanced ventilation.",
        img: "src/assets/images/IMG_2086_.jpg"
    },
    {
        title: "Men’s Dormitory",
        desc: "Comfortable and professionally managed living spaces designed for students and working professionals.",
        img: "src/assets/images/DSC08440.jpg"
    },
    {
        title: "Women’s Dormitory",
        desc: "Safe and hygienic accommodation focused on comfort, privacy, and community living.",
        img: "src/assets/images/DSC08603-copy-768x512.jpg"
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
                            From hygienic tiffin services to comfortable dormitories and large-scale catering, Jeh’s Nest delivers reliable hospitality solutions tailored for modern city living.
                        </p>
                        <a href="#">View All Services</a>
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