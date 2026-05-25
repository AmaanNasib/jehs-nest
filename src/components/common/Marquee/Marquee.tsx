import React from "react";
import "./Marquee.css";

const Marquee: React.FC = () => {
    return (
        <div className="marquee">
            <div className="marquee-track">

                {/* duplicate for infinite loop */}
                <span className="marquee-text">
                    Fresh Home-Style Meals • Hygienic Daily Food • Corporate Catering • Comfortable Dormitory Stay • Safe Living Spaces • 500+ Meals Daily • Premium Tiffin Service • Affordable Accommodation • FSSAI Certified Kitchen • Own Daily Delivery                </span>

                <span className="marquee-text">
                    Fresh Home-Style Meals • Hygienic Daily Food • Corporate Catering • Comfortable Dormitory Stay • Safe Living Spaces • 500+ Meals Daily • Premium Tiffin Service • Affordable Accommodation • FSSAI Certified Kitchen • Own Daily Delivery                </span>

            </div>
        </div>
    );
};

export default Marquee;