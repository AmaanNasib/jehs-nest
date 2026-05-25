import { ArrowUpRight, PhoneCall } from "lucide-react";
import "./AboutLuxury.css";

const AboutLuxury = () => {
    return (
        <section className="about-lux">

            <div className="container about-lux-wrapper">

                {/* LEFT */}
                <div
                    className="about-lux-left"
                    data-aos="fade-right"
                >

                    <span className="about-badge">
                        JEH’S NEST
                    </span>

                    <h2>
                        Comfortable <span>managed living</span>
                        <br />
                        with fresh meals &
                        <br />
                        everyday convenience
                    </h2>

                    <p className="desc">
                        Jeh’s Nest offers safe and professionally managed
                        dormitory accommodation designed for students,
                        working professionals, and individuals looking
                        for a peaceful and comfortable stay in Mumbai.
                    </p>

                    <p className="desc small">
                        From hygienic home-style meals to reliable daily
                        services, we focus on creating a stress-free living
                        experience with comfort, safety, and convenience
                        at the center of everything we do.
                    </p>

                    {/* CTA */}
                    <div className="about-actions">

                        <button className="primary-btn">

                            Explore Rooms

                            <ArrowUpRight size={16} />

                        </button>

                        <div className="contact">

                            <PhoneCall size={18} />

                            <div>

                                <span>
                                    Call us for Inquiry:
                                </span>

                                <strong>
                                    +91 98929 39585
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div
                    className="about-lux-right"
                    data-aos="fade-left"
                >

                    <img
                        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
                        alt="Jeh's Nest dormitory room"
                    />

                    {/* TOP BADGE */}
                    <div className="lux-badge">

                        <span>
                            Safe • Hygienic • Comfortable
                        </span>

                    </div>

                    {/* BOTTOM OVERLAY */}
                    <div className="lux-overlay">

                        Professionally managed accommodation
                        designed for peaceful living, comfort,
                        and reliable daily convenience.

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutLuxury;