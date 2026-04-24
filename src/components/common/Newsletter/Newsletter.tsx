import React from "react";
import "./Newsletter.css";

const Newsletter: React.FC = () => {
    return (
        <section className="newsletter">
            <div className="container newsletter-container">

                {/* LEFT */}
                <div
                    className="newsletter-left"
                    data-aos="fade-up"
                >
                    <h2>Subscribe To Our Newsletter</h2>

                    <div
                        className="newsletter-input"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <input type="email" placeholder="Your email address..." />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* DIVIDER */}
                <div
                    className="newsletter-divider"
                    data-aos="fade-in"
                    data-aos-delay="150"
                />

                {/* RIGHT */}
                <div
                    className="newsletter-right"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3>
                        20% <span>off</span>
                    </h3>

                    <p>
                        With our tiffin service to meet the symphony of flavors
                    </p>

                    <button
                        className="outline-btn"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Get in touch
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Newsletter;