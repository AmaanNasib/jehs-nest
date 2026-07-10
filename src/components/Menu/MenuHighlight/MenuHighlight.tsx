import "./MenuHighlight.css";

const MenuHighlight = () => {
    return (
        <section className="menu-highlight">

            <div className="container">

                <div className="menu-wrapper">

                    {/* LEFT CONTENT */}
                    <div
                        className="menu-left"
                        data-aos="fade-right"
                    >

                        <span className="menu-tag">
                            Jeh’s Kitchen
                        </span>

                        <h2>
                            Fresh, Hygienic &
                            <br />
                            Home-Style Meals
                            <br />
                            Served Daily
                        </h2>

                        <p>
                            Jeh’s Kitchen prepares nutritious and
                            affordable meals using fresh ingredients,
                            daily vegetables, and standardized cooking
                            practices. Every meal is designed to bring
                            comfort, taste, and consistency to your
                            everyday routine.
                        </p>

                        <div className="menu-points">

                            <span>
                                500+ Meals Daily
                            </span>

                            <span>
                                Fresh Daily Preparation
                            </span>

                            <span>
                                Hygienic Kitchen Standards
                            </span>

                        </div>

                    </div>

                    {/* CENTER BIG IMAGE */}
                    <div
                        className="menu-center"
                        data-aos="zoom-in"
                    >

                        <img
                            src="/images/5DGT2140.JPG"
                            alt="Fresh healthy meal"
                        />

                    </div>

                    {/* RIGHT STACKED IMAGES */}
                    <div className="menu-right">

                        <div
                            data-aos="fade-up"
                        >

                            <img
                                src="/images/IMG_1805.JPG"
                                alt="Freshly prepared food"
                            />

                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >

                            <img
                                src="/images/5DGT2111.JPG"
                                alt="Healthy kitchen meal"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MenuHighlight;