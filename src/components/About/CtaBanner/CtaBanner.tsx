import "./CtaBanner.css";

const CtaBanner = () => {
    return (
        <section className="cta-banner">

            <div className="cta-overlay"></div>

            <div className="cta-content">

                <span className="cta-tag">
                    JEH’S NEST
                </span>

                <h2>
                    Turn Your Everyday Living
                    <br />
                    Into A Comfortable Experience
                </h2>

                <p>
                    Experience safe dormitory accommodation,
                    fresh home-style meals, and reliable daily
                    hospitality services designed for students
                    and working professionals across Mumbai.
                </p>

                <div className="cta-highlights">

                    <span>
                        500+ Meals Daily
                    </span>

                    <span>
                        Safe & Hygienic Stay
                    </span>

                    <span>
                        Trusted By 300+ Customers
                    </span>

                </div>

                <button className="cta-btn">
                    Book A Consultation →
                </button>

            </div>

        </section>
    );
};

export default CtaBanner;