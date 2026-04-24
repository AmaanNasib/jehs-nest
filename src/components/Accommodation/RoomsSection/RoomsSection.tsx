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
                    <span className="rooms-tag">ROOMS & SUITES</span>

                    <h2>
                        Revel in the <span>Unmatched Comfort</span> with The Mist
                    </h2>
                </div>

                {/* GRID */}
                <div className="rooms-grid">

                    {/* TOP LEFT */}
                    <div
                        className="room-card one"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" alt="" />
                        <div className="room-overlay">
                            <span className="badge">5% OFF</span>
                            <div className="info">
                                <p>$129 / PER NIGHT</p>
                                <h3>Superior Rooms</h3>
                            </div>
                        </div>
                    </div>

                    {/* TOP RIGHT */}
                    <div
                        className="room-card two"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="" />
                        <div className="room-overlay">
                            <span className="badge">10% OFF</span>
                            <div className="info">
                                <p>$149 / PER NIGHT</p>
                                <h3>Deluxe Rooms</h3>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM 1 */}
                    <div
                        className="room-card three"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg" alt="" />
                        <div className="room-overlay">
                            <span className="badge">10% OFF</span>
                            <div className="info">
                                <p>$199 / PER NIGHT</p>
                                <h3>Premium Rooms</h3>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM 2 */}
                    <div
                        className="room-card four"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg" alt="" />
                        <div className="room-overlay">
                            <span className="badge">15% OFF</span>
                            <div className="info">
                                <p>$249 / PER NIGHT</p>
                                <h3>Executive Rooms</h3>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM 3 */}
                    <div
                        className="room-card five"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <img src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg" alt="" />
                        <div className="room-overlay">
                            <span className="badge">20% OFF</span>
                            <div className="info">
                                <p>$399 / PER NIGHT</p>
                                <h3>Studio Room</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RoomsSection;