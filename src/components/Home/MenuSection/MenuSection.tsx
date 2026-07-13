import React from "react";
import "./MenuSection.css";

const menuItems = [
    {
        title: "Veg Thali",
        desc: "A wholesome vegetarian thali featuring fresh chapati, rice, seasonal vegetables, curry, papad, and salad for a complete meal.",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.37 PM.webp"
    },
    {
        title: "Dal",
        desc: "Traditional slow-cooked dal prepared with aromatic spices, offering a rich and comforting homemade flavor.",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (1)_.webp"
    },
    {
        title: "Laddu",
        desc: "Soft, delicious handcrafted laddus made with premium ingredients, perfect for every celebration and festive occasion.",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (2).webp"
    },
    {
        title: "Veg Platter",
        desc: "A delightful platter featuring a variety of flavorful vegetarian dishes, rice, curry, and accompaniments in one satisfying meal.",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM.webp"
    },
    {
        title: "Sweet Dish (Halwa)",
        desc: "Rich and flavorful halwa made with premium ingredients, garnished with dry fruits for a delicious traditional dessert.",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.39 PM.webp"
    },
    {
        title: "Fresh Salad",
        desc: "A refreshing salad prepared with crisp vegetables and fresh ingredients, making the perfect healthy accompaniment.",
        img: "/images/compressed/IMG_1937.webp"
    }
];

const MenuSection: React.FC = () => {
    return (
        <section className="menu-section">
            <div className="container">

                {/* Heading */}
                <h2 className="menu-heading" data-aos="fade-up">
                    Discover Our Food Menu
                </h2>

                {/* Grid */}
                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <div
                            className="menu-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // 🔥 stagger grid
                        >

                            <div
                                className="menu-image"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100 + 100}
                            >
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="menu-content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <a href="#">Order now!</a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MenuSection;