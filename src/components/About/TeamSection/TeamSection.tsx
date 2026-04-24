import "./Team.css";

const team = [
    {
        name: "Rosheh Parikh",
        img: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
    },
    {
        name: "Maya Roy",
        img: "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg"
    },
    {
        name: "Ronney Bert",
        img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg",
        highlight: true
    },
    {
        name: "Billy Vasquez",
        img: "https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg"
    },
    {
        name: "Noah Thompson",
        img: "https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg"
    }
];

const TeamSection = () => {
    return (
        <section className="team-section">

            <div className="container">
                <h2 className="team-title">Meet Our Cooks</h2>

                <div className="team-wrapper">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className={`team-card ${member.highlight ? "active" : ""}`}
                        >
                            <div className="team-img">
                                <img src={member.img} alt={member.name} />
                            </div>

                            <h4>{member.name}</h4>

                            <div className="team-social">
                                <span>f</span>
                                <span>x</span>
                                <span>in</span>
                                <span>ig</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TeamSection;