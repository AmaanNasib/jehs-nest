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
    Wifi,
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import { useState, type JSX } from "react";
import "./AmenitiesSection.css";

type AmenityType = {
    icon: JSX.Element;
    title: string;
    desc: string;
    images: string[];
};

const amenities: AmenityType[] = [
    {
        icon: <Users />,
        title: "Separate Floors",
        desc: "Separate floors for males and females ensuring privacy and comfort.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg",
            "https://images.pexels.com/photos/271626/pexels-photo-271626.jpeg"
        ]
    },
    {
        icon: <WashingMachine />,
        title: "Washing Machine Facility",
        desc: "Easy access to washing machines for daily laundry needs.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Tv />,
        title: "Television",
        desc: "Entertainment available in common areas for relaxation.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <ShowerHead />,
        title: "Separate Washrooms",
        desc: "Clean and separate washrooms with proper shower facilities.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Bath />,
        title: "Toiletries Provided",
        desc: "Shampoo, shower gel, and handwash available for residents.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Flame />,
        title: "Kitchen Access",
        desc: "Flameless kitchen available for light cooking needs.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Snowflake />,
        title: "Air Conditioning",
        desc: "Comfortable AC rooms for a pleasant living experience.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Wifi />,
        title: "High Speed Wifi",
        desc: "Fast and reliable internet connectivity across all areas.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Droplet />,
        title: "Bisleri Water",
        desc: "Clean and safe drinking water available at all times.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    },
    {
        icon: <Gamepad2 />,
        title: "Indoor Games",
        desc: "Indoor games available for leisure and social time.",
        images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
        ]
    }
];

const AmenitiesSection = () => {

    const [popupOpen, setPopupOpen] = useState<boolean>(false);

    const [selectedAmenity, setSelectedAmenity] =
        useState<AmenityType | null>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const openPopup = (item: AmenityType): void => {
        setSelectedAmenity(item);
        setCurrentSlide(0);
        setPopupOpen(true);
    };

    const closePopup = (): void => {
        setPopupOpen(false);
    };

    const nextSlide = (): void => {

        if (!selectedAmenity) return;

        setCurrentSlide((prev) =>
            prev === selectedAmenity.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = (): void => {

        if (!selectedAmenity) return;

        setCurrentSlide((prev) =>
            prev === 0 ? selectedAmenity.images.length - 1 : prev - 1
        );
    };

    return (
        <>
            <section className="amenities-section">
                <div className="container">

                    <div className="amenities-header" data-aos="fade-up">

                        <span className="tag">
                            AMENITIES
                        </span>

                        <h2>
                            Comfortable Living With
                            <span> All Essential Facilities</span>
                        </h2>

                    </div>

                    <div className="amenities-grid">

                        {amenities.map((item, i) => (
                            <div
                                className="amenity-card"
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                onClick={() => openPopup(item)}
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

            {popupOpen && selectedAmenity && (

                <div className="amenity-popup">

                    <div
                        className="popup-overlay"
                        onClick={closePopup}
                    ></div>

                    <div className="popup-content">

                        <button
                            className="close-btn"
                            onClick={closePopup}
                        >
                            <X size={22} />
                        </button>

                        <div className="popup-slider">

                            <button
                                className="nav-btn left"
                                onClick={prevSlide}
                            >
                                <ChevronLeft />
                            </button>

                            <img
                                src={selectedAmenity.images[currentSlide]}
                                alt={selectedAmenity.title}
                            />

                            <button
                                className="nav-btn right"
                                onClick={nextSlide}
                            >
                                <ChevronRight />
                            </button>

                        </div>

                        <div className="popup-info">

                            <h3>
                                {selectedAmenity.title}
                            </h3>

                            <p>
                                {selectedAmenity.desc}
                            </p>

                        </div>

                    </div>

                </div>

            )}
        </>
    );
};

export default AmenitiesSection;