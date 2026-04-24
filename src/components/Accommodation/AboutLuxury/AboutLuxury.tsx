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
                    <span className="about-badge">ABOUT US</span>

                    <h2>
                        Comfortable <span>dorm living</span> enhanced by
                        <br /> daily convenience
                    </h2>

                    <p className="desc">
                        Experience safe and comfortable dormitory living at Jeh’s Nest.
                        Designed for students and working professionals, we offer
                        clean rooms, structured living, and a peaceful environment.
                    </p>

                    <p className="desc small">
                        Enjoy fresh home-style meals, reliable services, and a
                        location close to transport and essentials. We focus on
                        comfort, hygiene, and a stress-free stay every day.
                    </p>

                    {/* CTA */}
                    <div className="about-actions">

                        <button className="primary-btn">
                            Explore Rooms <ArrowUpRight size={16} />
                        </button>

                        <div className="contact">
                            <PhoneCall size={18} />
                            <div>
                                <span>Call us for Inquiry:</span>
                                <strong>+91 98929 39585</strong>
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
                        alt="dorm"
                    />

                    {/* TOP BADGE */}
                    <div className="lux-badge">
                        <span>Safe • Comfortable • Reliable</span>
                    </div>

                    {/* BOTTOM OVERLAY */}
                    <div className="lux-overlay">
                        A well-managed dorm experience designed for
                        daily comfort and peaceful living.
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutLuxury;