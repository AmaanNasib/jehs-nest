import React from "react";
import "./StatsSection.css";

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="container stats-grid">

                {/* LEFT BIG IMAGE */}
                <div className="stats-image">
                    <img src="https://images.pexels.com/photos/35531303/pexels-photo-35531303.jpeg" alt="dorm" />
                </div>

                {/* RIGHT GRID */}
                <div className="stats-right">

                    <div className="stat-card">
                        <span className="stat-label">TOTAL ROOMS</span>
                        <h2>
                            180 <span>+</span>
                        </h2>
                        <p>comfortable dorm rooms</p>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">YEARLY VISITORS</span>
                        <h2>
                            8500 <span>+</span>
                        </h2>
                        <p>happy residents & guests</p>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">SIGNATURE MENU</span>
                        <h2>
                            65 <span>+</span>
                        </h2>
                        <p>fresh tiffin dishes & meals</p>
                    </div>

                    <div className="stat-image-small">
                        <img src="https://images.pexels.com/photos/33996079/pexels-photo-33996079.jpeg" alt="user" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StatsSection;