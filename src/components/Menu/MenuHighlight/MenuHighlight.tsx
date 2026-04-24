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
                        <span className="menu-tag">Highlight</span>

                        <h2>
                            Fresh & Homely <br />
                            Meals Everyday
                        </h2>

                        <p>
                            Enjoy simple, nutritious, and home-style meals
                            prepared daily. From breakfast to dinner, we focus
                            on taste, hygiene, and consistency for your comfort.
                        </p>
                    </div>

                    {/* CENTER BIG IMAGE */}
                    <div
                        className="menu-center"
                        data-aos="zoom-in"
                    >
                        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" />
                    </div>

                    {/* RIGHT STACKED IMAGES */}
                    <div className="menu-right">

                        <div data-aos="fade-up">
                            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" />
                        </div>

                        <div data-aos="fade-up" data-aos-delay="120">
                            <img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default MenuHighlight;