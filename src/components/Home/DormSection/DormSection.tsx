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
                            Clean and well-maintained rooms designed for
                            daily comfort and peaceful living.
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
                            Separate dorms for men & women with proper
                            security, hygiene, and daily support.
                        </p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="dorm-right">

                    <span>DORMITORY FACILITIES</span>

                    <h2>
                        Safe, Clean & Comfortable <br />
                        Living Spaces
                    </h2>

                    <p>
                        Designed for students and working professionals,
                        our dormitory offers a reliable stay with hygiene,
                        safety, and comfort at its core. Simple living,
                        managed properly.
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