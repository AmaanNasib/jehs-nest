import "./Team.css";

type TeamMember = {
    name: string;
    role: string;
    img: string;
    highlight?: boolean;
};

const team: TeamMember[] = [
    {
        name: "Sapna Take",
        role: "Founder & Certified Chef",
        img: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
    },
    {
        name: "Kitchen Operations Team",
        role: "Food Preparation Experts",
        img: "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg"
    },
    {
        name: "Abhishek Goyal",
        role: "Investor & Strategic Mentor",
        img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg",
        highlight: true
    },
    {
        name: "Hospitality Team",
        role: "Resident Support Team",
        img: "https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg"
    },
    {
        name: "Operations Management",
        role: "Facility Coordination",
        img: "https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg"
    }
];

const TeamSection = () => {
    return (
        <section className="team-section">

            <div className="container">

                <h2 className="team-title">
                    Meet Our Team
                </h2>

                <div className="team-wrapper">

                    {team.map((member, i) => (
                        <div
                            key={i}
                            className={`team-card ${member.highlight ? "active" : ""}`}
                        >

                            <div className="team-img">

                                <img
                                    src={member.img}
                                    alt={member.name}
                                />

                            </div>

                            <h4>
                                {member.name}
                            </h4>

                            <span className="team-role">
                                {member.role}
                            </span>

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