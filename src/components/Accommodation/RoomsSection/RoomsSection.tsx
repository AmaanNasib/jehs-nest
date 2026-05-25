import "./RoomsSection.css";

const RoomsSection = () => {
    return (
        <section className="rooms-section">

            <div className="container">

                {/* HEADER */}
                <div
                    className="rooms-header"
                    data-aos="fade-up"
                >

                    <span className="rooms-tag">
                        ACCOMMODATION
                    </span>

                    <h2>
                        Comfortable & Affordable
                        <span> Living Spaces</span>
                    </h2>

                    <p>
                        Safe and professionally managed dormitory spaces
                        designed for students and working professionals
                        looking for comfort, hygiene, and convenience.
                    </p>

                </div>

                {/* GRID */}
                <div className="rooms-grid">

                    {/* ROOM 1 */}
                    <div
                        className="room-card one"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >

                        <img
                            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
                            alt="Superior dormitory room"
                        />

                        <div className="room-overlay">

                            <span className="badge">
                                Popular
                            </span>

                            <div className="info">

                                <p>
                                    Starting From ₹7,999 / MONTH
                                </p>

                                <h3>
                                    Superior Rooms
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* ROOM 2 */}
                    <div
                        className="room-card two"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        <img
                            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                            alt="Deluxe dormitory room"
                        />

                        <div className="room-overlay">

                            <span className="badge">
                                Best Value
                            </span>

                            <div className="info">

                                <p>
                                    Starting From ₹9,499 / MONTH
                                </p>

                                <h3>
                                    Deluxe Rooms
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* ROOM 3 */}
                    <div
                        className="room-card three"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >

                        <img
                            src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
                            alt="Premium shared room"
                        />

                        <div className="room-overlay">

                            <span className="badge">
                                Premium
                            </span>

                            <div className="info">

                                <p>
                                    Starting From ₹11,999 / MONTH
                                </p>

                                <h3>
                                    Premium Rooms
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* ROOM 4 */}
                    <div
                        className="room-card four"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >

                        <img
                            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                            alt="Executive accommodation room"
                        />

                        <div className="room-overlay">

                            <span className="badge">
                                Spacious
                            </span>

                            <div className="info">

                                <p>
                                    Starting From ₹14,999 / MONTH
                                </p>

                                <h3>
                                    Executive Rooms
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* ROOM 5 */}
                    <div
                        className="room-card five"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >

                        <img
                            src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
                            alt="Studio style accommodation"
                        />

                        <div className="room-overlay">

                            <span className="badge">
                                Luxury Stay
                            </span>

                            <div className="info">

                                <p>
                                    Starting From ₹18,999 / MONTH
                                </p>

                                <h3>
                                    Studio Room
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RoomsSection;