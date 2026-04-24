import "./ExperienceSection.css";

const ExperienceSection = () => {
    return (
        <section className="exp-section">

            {/* DARK OVERLAY */}
            <div className="exp-overlay"></div>

            <div className="container exp-wrapper">

                {/* LEFT IMAGE CARD */}
                <div
                    className="exp-image-card"
                    data-aos="fade-right"
                >
                    <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" />
                </div>

                {/* RIGHT CONTENT */}
                <div
                    className="exp-content"
                    data-aos="fade-left"
                >
                    <span className="exp-tag">Our Experience</span>

                    <h2>
                        Our Years of Experience <br />
                        Will Serve <span>the Best</span>
                    </h2>

                    <p className="exp-sub">
                        We have 10+ years of experience providing safe,
                        comfortable dormitory living for students and professionals.
                    </p>

                    <p className="exp-desc">
                        With years of experience in managing shared accommodations,
                        Jeh’s Nest ensures a clean, secure, and well-managed
                        environment. From daily meals to maintenance, everything is
                        handled to give you a stress-free stay.
                    </p>

                    <button className="exp-btn">
                        Contact Us →
                    </button>

                    {/* STATS */}
                    <div className="exp-stats">
                        <div>
                            <h3>500+</h3>
                            <span>Happy Residents</span>
                        </div>
                        <div>
                            <h3>50+</h3>
                            <span>Rooms Available</span>
                        </div>
                        <div>
                            <h3>10+</h3>
                            <span>Years Experience</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;