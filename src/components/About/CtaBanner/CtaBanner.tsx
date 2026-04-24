import "./CtaBanner.css";

const CtaBanner = () => {
    return (
        <section className="cta-banner">
            <div className="cta-overlay"></div>

            <div className="cta-content">
                <h2>
                    Turn Your Vision Into A Space <br />
                    You’ll Love Every Day
                </h2>

                <p>
                    Let Bathora bring your vision to life with expert design,
                    premium materials, & flawless execution—tailored to your style & needs.
                </p>

                <button className="cta-btn">
                    Book A Consultation →
                </button>
            </div>
        </section>
    );
};

export default CtaBanner;