import {
    Bath,
    Droplet,
    Flame,
    Gamepad2,
    ShowerHead,
    Snowflake,
    Tv,
    Users,
    WashingMachine,
    Wifi
} from "lucide-react";
import "./AmenitiesSection.css";

const amenities = [
    {
        icon: <Users />,
        title: "Separate Floors",
        desc: "Separate floors for males and females ensuring privacy and comfort."
    },
    {
        icon: <WashingMachine />,
        title: "Washing Machine Facility",
        desc: "Easy access to washing machines for daily laundry needs."
    },
    {
        icon: <Tv />,
        title: "Television",
        desc: "Entertainment available in common areas for relaxation."
    },
    {
        icon: <ShowerHead />,
        title: "Separate Washrooms",
        desc: "Clean and separate washrooms with proper shower facilities."
    },
    {
        icon: <Bath />,
        title: "Toiletries Provided",
        desc: "Shampoo, shower gel, and handwash available for residents."
    },
    {
        icon: <Flame />,
        title: "Kitchen Access",
        desc: "Flameless kitchen available for light cooking needs."
    },
    {
        icon: <Snowflake />,
        title: "Air Conditioning",
        desc: "Comfortable AC rooms for a pleasant living experience."
    },
    {
        icon: <Wifi />,
        title: "High Speed Wifi",
        desc: "Fast and reliable internet connectivity across all areas."
    },
    {
        icon: <Droplet />,
        title: "Bisleri Water",
        desc: "Clean and safe drinking water available at all times."
    },
    {
        icon: <Gamepad2 />,
        title: "Indoor Games",
        desc: "Indoor games available for leisure and social time."
    }
];

const AmenitiesSection = () => {
    return (
        <section className="amenities-section">
            <div className="container">

                <div className="amenities-header" data-aos="fade-up">
                    <span className="tag">AMENITIES</span>

                    <h2>
                        Comfortable Living With <span>All Essential Facilities</span>
                    </h2>
                </div>

                <div className="amenities-grid">
                    {amenities.map((item, i) => (
                        <div
                            className="amenity-card"
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            <div className="icon-box">
                                {item.icon}
                            </div>

                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AmenitiesSection;