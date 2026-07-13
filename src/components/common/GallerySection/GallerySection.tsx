import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./GallerySection.css";

const tabs = ["All", "Team", "Kitchen", "Food", "Office"];

const images = [
    // TEAM
    { category: "Team", src: "/images/compressed/1 (2).webp" },
    { category: "Team", src: "/images/compressed/1 (3).webp" },
    { category: "Team", src: "/images/compressed/1 (4).webp" },
    { category: "Team", src: "/images/compressed/5DGT2516.webp" },
    { category: "Team", src: "/images/compressed/5DGT2517.webp" },
    { category: "Team", src: "/images/compressed/5DGT2519_.webp" }, // Fixed
    { category: "Team", src: "/images/compressed/IMG_1941.webp" },
    { category: "Team", src: "/images/compressed/IMG_1942_.webp" }, // Fixed
    { category: "Team", src: "/images/compressed/IMG_1943.webp" },
    { category: "Team", src: "/images/compressed/IMG_1944.webp" },
    { category: "Team", src: "/images/compressed/IMG_2006.webp" },
    { category: "Team", src: "/images/compressed/IMG_2016_.webp" }, // Fixed
    { category: "Team", src: "/images/compressed/IMG_2019_.webp" }, // Fixed
    { category: "Team", src: "/images/compressed/IMG_2024.webp" },

    // KITCHEN
    { category: "Kitchen", src: "/images/compressed/5DGT2003_.webp" }, // Fixed
    { category: "Kitchen", src: "/images/compressed/5DGT2010_.webp" }, // Fixed
    { category: "Kitchen", src: "/images/compressed/5DGT2012.webp" },
    { category: "Kitchen", src: "/images/compressed/5DGT2016.webp" },
    { category: "Kitchen", src: "/images/compressed/5DGT2018.webp" },
    { category: "Kitchen", src: "/images/compressed/5DGT2044.webp" },
    { category: "Kitchen", src: "/images/compressed/5DGT2058_.webp" }, // Fixed
    { category: "Kitchen", src: "/images/compressed/5DGT2062_.webp" }, // Fixed
    { category: "Kitchen", src: "/images/compressed/IMG_2084.webp" },
    { category: "Kitchen", src: "/images/compressed/IMG_2085.webp" },
    { category: "Kitchen", src: "/images/compressed/IMG_2086_.webp" }, // Fixed

    // FOOD
    { category: "Food", src: "/images/compressed/5DGT2174.webp" },
    { category: "Food", src: "/images/compressed/5DGT2186_.webp" }, // Fixed
    { category: "Food", src: "/images/compressed/5DGT2247.webp" },
    { category: "Food", src: "/images/compressed/5DGT2400.webp" },
    { category: "Food", src: "/images/compressed/5DGT2458.webp" },
    { category: "Food", src: "/images/compressed/5DGT2461.webp" },
    { category: "Food", src: "/images/compressed/IMG_1738.webp" },
    { category: "Food", src: "/images/compressed/IMG_1740.webp" },
    { category: "Food", src: "/images/compressed/IMG_1805.webp" },
    { category: "Food", src: "/images/compressed/IMG_1813_.webp" }, // Fixed
    { category: "Food", src: "/images/compressed/IMG_1891.webp" },
    { category: "Food", src: "/images/compressed/IMG_1892.webp" },
    { category: "Food", src: "/images/compressed/IMG_1895.webp" },
    { category: "Food", src: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.37 PM.webp" }, // Fixed
    { category: "Food", src: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (1)_.webp" }, // Fixed
    { category: "Food", src: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (2).webp" },
    { category: "Food", src: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM.webp" },
    { category: "Food", src: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.39 PM.webp" },

    // OFFICE
    { category: "Office", src: "/images/compressed/5DGT2672.webp" },
    { category: "Office", src: "/images/compressed/5DGT2675.webp" },
    { category: "Office", src: "/images/compressed/5DGT2688.webp" },
    { category: "Office", src: "/images/compressed/DSC08249-copy-768x512.webp" },
    { category: "Office", src: "/images/compressed/DSC08264-copy-768x1152.webp" },
    { category: "Office", src: "/images/compressed/DSC08406-copy-768x512.webp" },
    { category: "Office", src: "/images/compressed/DSC08440.webp" },
    { category: "Office", src: "/images/compressed/IMG_2091.webp" },
    { category: "Office", src: "/images/compressed/IMG_2111.webp" },
    {
        category: "Office",
        src: "/images/compressed/Jehs-Nest-Luxury-AC-Dormitory-Picture-of-the-business-which-shows-clear-signage--768x741.webp", // Fixed
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
                bgImage="/images/compressed/5DGT2400.webp"
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