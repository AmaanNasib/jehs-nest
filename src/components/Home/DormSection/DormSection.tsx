import React from "react";
import "./DormSection.css";
import { BedDouble, ShieldCheck } from "lucide-react";

const DormSection: React.FC = () => {
    return (
        <section className="dorm-section">
            <div className="container dorm-wrapper">

                {/* LEFT GRID */}
                <div className="dorm-left">

                    <div className="dorm-card">
                        <BedDouble className="icon" />
                        <h4>Comfortable Rooms</h4>
                        <p>
                            Clean, spacious, and well-maintained shared living spaces designed for everyday convenience.
                        </p>
                    </div>

                    <div className="dorm-img">
                        <img src="https://images.pexels.com/photos/35165103/pexels-photo-35165103.jpeg" />
                    </div>

                    <div className="dorm-img">
                        <img src="https://images.pexels.com/photos/7969104/pexels-photo-7969104.jpeg" />
                    </div>

                    <div className="dorm-card">
                        <ShieldCheck className="icon" />
                        <h4>Safe & Secure</h4>
                        <p>
                            Professionally managed dormitories with safety-focused infrastructure and reliable support systems.
                        </p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="dorm-right">

                    <span>SAFE LIVING SPACES</span>

                    <h2>
                        Safe, Clean & Comfortable <br />
                        Living Spaces
                    </h2>

                    <p>
                        Jeh’s Nest provides thoughtfully designed accommodation with modern amenities, hygienic maintenance, and a community-focused environment for students and professionals.
                    </p>

                    <button className="dorm-btn">
                        Explore Rooms
                    </button>

                </div>

            </div>
        </section>
    );
};

export default DormSection;