import React from "react";
import "./Marquee.css";

const Marquee: React.FC = () => {
    return (
        <div className="marquee">
            <div className="marquee-track">

                {/* duplicate for infinite loop */}
                <span className="marquee-text">
                    Fresh Home-Style Tiffin Meals — Hygienic Daily Food — Corporate Catering — Jain Special Meals — Comfortable Dormitory Stay — Safe & Clean Rooms — Student & Working Professional Stay —
                </span>

                <span className="marquee-text">
                    Fresh Home-Style Tiffin Meals — Hygienic Daily Food — Corporate Catering — Jain Special Meals — Comfortable Dormitory Stay — Safe & Clean Rooms — Student & Working Professional Stay —
                </span>

            </div>
        </div>
    );
};

export default Marquee;