import "./FoodMenuSection.css";

const dishes = [
    {
        name: "Jeh’s Premium",
        desc: "Dal fry / tadka + seasonal vegetable + phulka + rice + salad / papad",
        priceSmall: "₹120",
        priceLarge: "Lunch & Dinner",
        img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        name: "Jeh’s Premium Special",
        desc: "Veg / Non-veg special dish + bhakri / phulka + rice + salad + sweet",
        priceSmall: "₹160",
        priceLarge: "Wednesday & Friday",
        img: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
    },
    {
        name: "Daily Fresh Meals",
        desc: "Freshly prepared meals served hot with balanced nutrition and hygiene",
        priceSmall: "Fresh & Hot",
        priceLarge: "Daily Service",
        img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
    },
    {
        name: "Affordable Meal Plans",
        desc: "Budget-friendly meal subscriptions for students and working professionals",
        priceSmall: "Monthly Plans",
        priceLarge: "Custom Packages",
        img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        name: "Catering & Party Orders",
        desc: "Bulk food preparation and catering solutions for events and gatherings",
        priceSmall: "600+ Capacity",
        priceLarge: "Bulk Orders",
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    {
        name: "Home-Style Tiffin",
        desc: "Comfort food prepared with authentic homemade taste and quality ingredients",
        priceSmall: "Daily Delivery",
        priceLarge: "Own Delivery",
        img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg"
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