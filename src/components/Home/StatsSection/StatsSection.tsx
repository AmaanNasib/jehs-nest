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
                        <span className="stat-label">Comfortable Dorm Beds</span>
                        <h2>
                            180 <span>+</span>
                        </h2>
                        <p>Safe and hygienic managed accommodation</p>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">Meals Delivered Monthly</span>
                        <h2>
                            8500 <span>+</span>
                        </h2>
                        <p>Fresh kitchen meals served consistently</p>
                    </div>

                    <div className="stat-card">
                        <span className="stat-label">Corporate & Bulk Orders</span>
                        <h2>
                            65 <span>+</span>
                        </h2>
                        <p>Trusted catering and bulk food solutions</p>

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