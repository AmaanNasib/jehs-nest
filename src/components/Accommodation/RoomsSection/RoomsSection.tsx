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
                            src="/images/DSC08440.jpg"
                            alt="Reception & Administration"
                        />

                        <div className="room-overlay">
                            <span className="badge">
                                24×7 Assistance
                            </span>

                            <div className="info">
                                <p>Friendly Support & Check-in</p>
                                <h3>Reception Area</h3>
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
                            src="/images/DSC08619-copy-768x1152.jpg"
                            alt="6 Sharing Dormitory"
                        />

                        <div className="room-overlay">
                            <span className="badge">
                                Budget Friendly
                            </span>

                            <div className="info">
                                <p>Comfortable Shared Accommodation</p>
                                <h3>6 Sharing Dormitory</h3>
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
                            src="/images/DSC08264-copy-768x1152.jpg"
                            alt="8 Sharing Dormitory"
                        />

                        <div className="room-overlay">
                            <span className="badge">
                                Student Favorite
                            </span>

                            <div className="info">
                                <p>Spacious & Well Ventilated</p>
                                <h3>8 Sharing Dormitory</h3>
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
                            src="/images/DSC08249-copy-768x512.jpg"
                            alt="Privacy Bunk"
                        />

                        <div className="room-overlay">
                            <span className="badge">
                                Privacy Curtains
                            </span>

                            <div className="info">
                                <p>Comfortable Individual Sleeping Space</p>
                                <h3>Private Bunk Area</h3>
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
                            src="/images/DSC08603-copy-768x512.jpg"
                            alt="Modern Dormitory"
                        />

                        <div className="room-overlay">
                            <span className="badge">
                                Clean & Hygienic
                            </span>

                            <div className="info">
                                <p>Well Maintained Shared Accommodation</p>
                                <h3>Modern Dormitory</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default RoomsSection;