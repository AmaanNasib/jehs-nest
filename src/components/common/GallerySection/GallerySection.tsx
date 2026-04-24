import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./GallerySection.css";

const tabs = ["All", "Rooms", "Dining", "Facilities"];

const images = [
    // ROOMS
    { category: "Rooms", src: "https://t4.ftcdn.net/jpg/09/84/28/25/240_F_984282595_RxmvqKMzQQqlbFXIbQnywaBmbz7Rq5Hr.jpg" },
    { category: "Rooms", src: "https://images.pexels.com/photos/262940/pexels-photo-262940.jpeg" },
    { category: "Rooms", src: "https://images.pexels.com/photos/16074401/pexels-photo-16074401.jpeg" },
    { category: "Rooms", src: "https://images.pexels.com/photos/35532828/pexels-photo-35532828.jpeg" },

    // DINING / FOOD
    { category: "Dining", src: "https://t3.ftcdn.net/jpg/10/08/49/26/240_F_1008492614_RwP6CFpiUnxXBC4MK6C5kHaXWtLQTh99.jpg" },
    { category: "Dining", src: "https://images.pexels.com/photos/19553654/pexels-photo-19553654.jpeg" },
    { category: "Dining", src: "https://images.pexels.com/photos/25020308/pexels-photo-25020308.jpeg" },
    { category: "Dining", src: "https://images.pexels.com/photos/34366570/pexels-photo-34366570.jpeg" },

    // FACILITIES
    { category: "Facilities", src: "https://images.pexels.com/photos/21077136/pexels-photo-21077136.jpeg" },
    { category: "Facilities", src: "https://images.pexels.com/photos/29795381/pexels-photo-29795381.jpeg" },
    { category: "Facilities", src: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg" },
    { category: "Facilities", src: "https://images.pexels.com/photos/35158690/pexels-photo-35158690.jpeg" }
];

const GallerySection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredImages =
        activeTab === "All"
            ? images
            : images.filter((img) => img.category === activeTab);

    return (
        <section className="gallery-section">
            <Breadcrumb
                title="Gallery"
                bgImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Gallery" }
                ]}
            />


            <div className="container">

                {/* TABS */}
                <div className="gallery-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="gallery-grid">
                    {filteredImages.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img.src} alt={`gallery-${index}`} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GallerySection;