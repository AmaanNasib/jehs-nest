import {
    BadgeCheck,
    Clock,
    Layers,
    Lightbulb,
    Users
} from "lucide-react";

import "./WhyChoose.css";

const features = [
    {
        icon: <Layers />,
        title: "Comfortable Living Spaces",
        desc: "Spacious and well-maintained dormitory rooms designed for peaceful and comfortable everyday living."
    },
    {
        icon: <Users />,
        title: "Professional Management",
        desc: "Dedicated support and operations team ensuring smooth accommodation management and resident satisfaction."
    },
    {
        icon: <Lightbulb />,
        title: "Smart Living Solutions",
        desc: "Integrated stay and meal services designed to simplify daily life for students and working professionals."
    },
    {
        icon: <BadgeCheck />,
        title: "Transparent Pricing",
        desc: "Affordable accommodation and food plans with clear pricing and no hidden charges."
    },
    {
        icon: <Clock />,
        title: "Daily Reliable Service",
        desc: "Consistent food delivery, hygiene maintenance, cleaning support, and operational assistance every day."
    }
];

const WhyChoose = () => {
    return (
        <section className="why-section">

            <div className="container why-wrapper">

                {/* LEFT */}
                <div
                    className="why-left"
                    data-aos="fade-right"
                >

                    <span className="why-tag">
                        Why Choose Us
                    </span>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Trusted Choice For
                        <br />
                        Dormitory & Daily Living
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Jeh’s Nest provides safe accommodation,
                        hygienic meals, and reliable hospitality
                        services designed for students and working
                        professionals seeking comfort and convenience.
                    </p>

                    {/* STATS */}
                    <div className="why-stats">

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <h3>
                                500+
                            </h3>

                            <span>
                                Happy Residents
                            </span>

                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >

                            <h3>
                                50+
                            </h3>

                            <span>
                                Rooms Available
                            </span>

                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >

                            <h3>
                                95%
                            </h3>

                            <span>
                                Retention Rate
                            </span>

                        </div>

                    </div>

                    {/* IMAGE */}
                    <div
                        className="why-image"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >

                        <img
                            src="src/assets/images/DSC08249-copy-768x512.jpg"
                            alt="Comfortable dormitory room"
                        />

                    </div>

                </div>

                {/* RIGHT */}
                <div
                    className="why-right"
                    data-aos="fade-left"
                >

                    <div className="why-card">

                        {features.map((item, i) => (
                            <div
                                className="why-item"
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 120}
                            >

                                <div className="why-icon">
                                    {item.icon}
                                </div>

                                <div className="why-content">

                                    <h4>
                                        {item.title}
                                    </h4>

                                    <p>
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyChoose;