import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./GallerySection.css";

const tabs = ["All", "Team", "Kitchen", "Food", "Office"];

const images = [
    // TEAM
    { category: "Team", src: "src/assets/images/1 (2).jpg" },
    { category: "Team", src: "src/assets/images/1 (3).jpg" },
    { category: "Team", src: "src/assets/images/1 (4).jpg" },
    { category: "Team", src: "src/assets/images/5DGT2516.JPG" },
    { category: "Team", src: "src/assets/images/5DGT2517.JPG" },
    { category: "Team", src: "src/assets/images/5DGT2519_.jpg" }, // Fixed
    { category: "Team", src: "src/assets/images/IMG_1941.JPG" },
    { category: "Team", src: "src/assets/images/IMG_1942_.jpg" }, // Fixed
    { category: "Team", src: "src/assets/images/IMG_1943.JPG" },
    { category: "Team", src: "src/assets/images/IMG_1944.JPG" },
    { category: "Team", src: "src/assets/images/IMG_2006.JPG" },
    { category: "Team", src: "src/assets/images/IMG_2016_.jpg" }, // Fixed
    { category: "Team", src: "src/assets/images/IMG_2019_.jpg" }, // Fixed
    { category: "Team", src: "src/assets/images/IMG_2024.JPG" },

    // KITCHEN
    { category: "Kitchen", src: "src/assets/images/5DGT2003_.jpg" }, // Fixed
    { category: "Kitchen", src: "src/assets/images/5DGT2010_.jpg" }, // Fixed
    { category: "Kitchen", src: "src/assets/images/5DGT2012.JPG" },
    { category: "Kitchen", src: "src/assets/images/5DGT2016.JPG" },
    { category: "Kitchen", src: "src/assets/images/5DGT2018.JPG" },
    { category: "Kitchen", src: "src/assets/images/5DGT2044.JPG" },
    { category: "Kitchen", src: "src/assets/images/5DGT2058_.jpg" }, // Fixed
    { category: "Kitchen", src: "src/assets/images/5DGT2062_.jpg" }, // Fixed
    { category: "Kitchen", src: "src/assets/images/IMG_2084.JPG" },
    { category: "Kitchen", src: "src/assets/images/IMG_2085.JPG" },
    { category: "Kitchen", src: "src/assets/images/IMG_2086_.jpg" }, // Fixed

    // FOOD
    { category: "Food", src: "src/assets/images/5DGT2174.JPG" },
    { category: "Food", src: "src/assets/images/5DGT2186_.jpg" }, // Fixed
    { category: "Food", src: "src/assets/images/5DGT2247.JPG" },
    { category: "Food", src: "src/assets/images/5DGT2400.JPG" },
    { category: "Food", src: "src/assets/images/5DGT2458.JPG" },
    { category: "Food", src: "src/assets/images/5DGT2461.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1738.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1740.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1805.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1813_.jpg" }, // Fixed
    { category: "Food", src: "src/assets/images/IMG_1891.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1892.JPG" },
    { category: "Food", src: "src/assets/images/IMG_1895.JPG" },
    { category: "Food", src: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.37 PM.jpeg" }, // Fixed
    { category: "Food", src: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.38 PM (1)_.jpg" }, // Fixed
    { category: "Food", src: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.38 PM (2).jpeg" },
    { category: "Food", src: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.38 PM.jpeg" },
    { category: "Food", src: "src/assets/images/WhatsApp Image 2026-05-01 at 6.55.39 PM.jpeg" },

    // OFFICE
    { category: "Office", src: "src/assets/images/5DGT2672.JPG" },
    { category: "Office", src: "src/assets/images/5DGT2675.JPG" },
    { category: "Office", src: "src/assets/images/5DGT2688.JPG" },
    { category: "Office", src: "src/assets/images/DSC08249-copy-768x512.jpg" },
    { category: "Office", src: "src/assets/images/DSC08264-copy-768x1152.jpg" },
    { category: "Office", src: "src/assets/images/DSC08406-copy-768x512.jpg" },
    { category: "Office", src: "src/assets/images/DSC08440.jpg" },
    { category: "Office", src: "src/assets/images/IMG_2091.JPG" },
    { category: "Office", src: "src/assets/images/IMG_2111.JPG" },
    {
        category: "Office",
        src: "src/assets/images/Jehs-Nest-Luxury-AC-Dormitory-Picture-of-the-business-which-shows-clear-signage--768x741.jpg", // Fixed
    },
];

const GallerySection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const filteredImages =
        activeTab === "All"
            ? images
            : images.filter((img) => img.category === activeTab);

    return (
        <section className="gallery-section">
            <Breadcrumb
                title="Gallery"
                bgImage="src/assets/images/5DGT2400.JPG"
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

                            {!loadedImages[index] && (
                                <div className="gallery-loader" />
                            )}

                            <img
                                src={img.src}
                                alt={`gallery-${index}`}
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                                style={{
                                    opacity: loadedImages[index] ? 1 : 0,
                                    transition: "opacity .35s ease"
                                }}
                                onLoad={() =>
                                    setLoadedImages((prev) => ({
                                        ...prev,
                                        [index]: true,
                                    }))
                                }
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    setLoadedImages((prev) => ({
                                        ...prev,
                                        [index]: true,
                                    }));
                                }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GallerySection;