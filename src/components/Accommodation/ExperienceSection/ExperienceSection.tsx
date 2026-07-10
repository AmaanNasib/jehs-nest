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

                    <img
                        src="/images/DSC08603-copy-768x512.jpg"
                        alt="Jeh's Nest Dormitory"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div
                    className="exp-content"
                    data-aos="fade-left"
                >

                    <span className="exp-tag">
                        Jeh’s Nest Experience
                    </span>

                    <h2>
                        Comfortable Living
                        <br />
                        Designed For <span>Modern Daily Life</span>
                    </h2>

                    <p className="exp-sub">
                        Safe accommodation, hygienic meals, and reliable
                        hospitality services for students and working professionals.
                    </p>

                    <p className="exp-desc">
                        Jeh’s Nest combines managed dormitory living with
                        fresh home-style food and dependable daily support.
                        From room maintenance to food delivery, everything
                        is handled with a focus on comfort, hygiene,
                        affordability, and operational consistency.
                    </p>

                    <button className="exp-btn">
                        Contact Us →
                    </button>

                    {/* STATS */}
                    <div className="exp-stats">

                        <div>

                            <h3>
                                500+
                            </h3>

                            <span>
                                Meals Served Daily
                            </span>

                        </div>

                        <div>

                            <h3>
                                300+
                            </h3>

                            <span>
                                Active Customers
                            </span>

                        </div>

                        <div>

                            <h3>
                                10+
                            </h3>

                            <span>
                                Years Of Experience
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ExperienceSection;