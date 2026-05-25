import React from "react";
import "./MenuSection.css";

const menuItems = [
    {
        title: "Coconut Fish Curry",
        desc: "Authentic coastal-style fish curry prepared with coconut and traditional spices.",
        img: "https://images.pexels.com/photos/35532828/pexels-photo-35532828.jpeg"
    },
    {
        title: "Delicious Biryani",
        desc: "Flavorful dum biryani made with aromatic spices and premium ingredients.",
        img: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg"
    },
    {
        title: "Classic Butter Chicken",
        desc: "Creamy tomato-based curry with soft, juicy chicken pieces.",
        img: "https://images.pexels.com/photos/35158690/pexels-photo-35158690.jpeg"
    },
    {
        title: "Full Dish Tiffin",
        desc: "A complete meal with variety, perfect for daily balanced nutrition.",
        img: "https://images.pexels.com/photos/25020308/pexels-photo-25020308.jpeg"
    },
    {
        title: "Southwest Salad",
        desc: "Fresh and colorful salad packed with bold and healthy flavors.",
        img: "https://images.pexels.com/photos/34366570/pexels-photo-34366570.jpeg"
    },
    {
        title: "Savory Pasta",
        desc: "Comforting pasta with rich sauce and perfectly cooked texture.",
        img: "https://images.pexels.com/photos/262940/pexels-photo-262940.jpeg"
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