import "./FoodMenuSection.css";

const dishes = [
    {
        name: "Veg Thali Meal",
        desc: "Rice, dal, sabzi, roti & salad",
        priceSmall: "₹80",
        priceLarge: "₹120",
        img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        name: "Healthy Bowl",
        desc: "Mixed veggies, paneer & grains",
        priceSmall: "₹90",
        priceLarge: "₹140",
        img: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
    },
    {
        name: "Protein Meal",
        desc: "High protein diet combo",
        priceSmall: "₹110",
        priceLarge: "₹160",
        img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
    },
    {
        name: "Special Dinner Combo",
        desc: "Full meal with dessert",
        priceSmall: "₹120",
        priceLarge: "₹180",
        img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        name: "Light Breakfast",
        desc: "Poha, tea & fruits",
        priceSmall: "₹50",
        priceLarge: "₹80",
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    {
        name: "Evening Snacks",
        desc: "Snacks with tea/coffee",
        priceSmall: "₹40",
        priceLarge: "₹70",
        img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg"
    }
];

const FoodMenuSection = () => {
    return (
        <section className="food-menu-section">
            <div className="container">

                {/* HEADER */}
                <div className="food-menu-header" data-aos="fade-up">
                    <div>
                        <span className="food-menu-tag">New Menu</span>
                        <h2>
                            View Our <br />Menus
                        </h2>
                    </div>

                    <button className="food-menu-btn">
                        View All
                    </button>
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
                                <img src={item.img} alt={item.name} />
                            </div>

                            <div className="food-menu-content">
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>

                                <div className="food-menu-price">
                                    <span>
                                        Small <b>{item.priceSmall}</b>
                                    </span>
                                    <span>
                                        Large <b>{item.priceLarge}</b>
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