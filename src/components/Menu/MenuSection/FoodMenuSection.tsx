import "./FoodMenuSection.css";

const dishes = [
    {
        name: "Veg Thali",
        desc: "A complete vegetarian meal with dal, seasonal vegetables, chapati, rice, papad, and fresh salad.",
        priceSmall: "Lunch",
        priceLarge: "Dinner",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.37 PM.webp"
    },
    {
        name: "Dal",
        desc: "Traditional homemade dal cooked with aromatic spices, perfect with rice or roti.",
        priceSmall: "Fresh",
        priceLarge: "Daily",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (1)_.webp"
    },
    {
        name: "Laddu",
        desc: "Soft and delicious traditional laddus made using premium ingredients for every occasion.",
        priceSmall: "Fresh",
        priceLarge: "Sweet",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM (2).webp"
    },
    {
        name: "Veg Platter",
        desc: "A delightful assortment of vegetarian dishes served with rice, curry, salad, and accompaniments.",
        priceSmall: "Special",
        priceLarge: "Meal",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.38 PM.webp"
    },
    {
        name: "Halwa",
        desc: "Rich and flavorful traditional halwa garnished with premium dry fruits for a perfect dessert.",
        priceSmall: "Dessert",
        priceLarge: "Fresh",
        img: "/images/compressed/WhatsApp Image 2026-05-01 at 6.55.39 PM.webp"
    },
    {
        name: "Fresh Salad",
        desc: "A healthy mix of fresh vegetables served as a refreshing accompaniment to every meal.",
        priceSmall: "Healthy",
        priceLarge: "Fresh",
        img: "/images/compressed/IMG_1937.webp"
    }
];
const FoodMenuSection = () => {
    return (
        <section className="food-menu-section">

            <div className="container">

                {/* HEADER */}
                <div
                    className="food-menu-header"
                    data-aos="fade-up"
                >

                    <div>

                        <span className="food-menu-tag">
                            Weekly Tiffin Menu
                        </span>

                        <h2>
                            Fresh Meals
                            <br />
                            Made Daily
                        </h2>

                        <p>
                            Hygienic home-style meals prepared fresh
                            every day for students, professionals,
                            and families.
                        </p>

                    </div>

                    {/* <button className="food-menu-btn">
                        View Full Menu
                    </button> */}

                </div>

                {/* GRID */}
                <div className="food-menu-grid">

                    {dishes.map((item, i) => (
                        <div
                            className="food-menu-card"
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >

                            <div className="food-menu-img">

                                <img
                                    src={item.img}
                                    alt={item.name}
                                />

                            </div>

                            <div className="food-menu-content">

                                <h4>
                                    {item.name}
                                </h4>

                                <p>
                                    {item.desc}
                                </p>

                                <div className="food-menu-price">

                                    <span>
                                        Plan <b>{item.priceSmall}</b>
                                    </span>

                                    <span>
                                        Service <b>{item.priceLarge}</b>
                                    </span>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default FoodMenuSection;