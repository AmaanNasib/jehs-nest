import {
    Calendar,
    Home,
    Mail,
    MessageSquare,
    Phone,
    User
} from "lucide-react";
import "./EnquirySection.css";

const EnquirySection = () => {
    return (
        <section className="enquiry-section">
            <div className="container enquiry-wrapper">

                {/* LEFT */}
                <div className="enquiry-left" data-aos="fade-right">
                    <span className="enquiry-tag">Plan Your Stay</span>

                    <h2>
                        Find Your Perfect <br />
                        <span>Dormitory Stay</span>
                    </h2>

                    <p>
                        Share your details and we’ll help you find the best
                        room based on your needs. Comfortable living with
                        food, safety, and convenience.
                    </p>

                    <div className="enquiry-contact">
                        <Phone size={18} />
                        <div>
                            <small>Call for Inquiry:</small>
                            <p>+91 9892939585</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="enquiry-card" data-aos="fade-left">

                    <h3>
                        Send <span>Enquiry</span>
                    </h3>

                    <form className="enquiry-form">

                        <div className="input-group">
                            <User size={16} />
                            <input type="text" placeholder="Full Name" />
                        </div>

                        <div className="input-group">
                            <Phone size={16} />
                            <input type="tel" placeholder="Phone Number" />
                        </div>

                        <div className="input-group">
                            <Mail size={16} />
                            <input type="email" placeholder="Email Address" />
                        </div>

                        <div className="input-group">
                            <Calendar size={16} />
                            <input type="date" />
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <User size={16} />
                                <select>
                                    <option>Adults</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <Home size={16} />
                                <select>
                                    <option>Select Dorm</option>
                                    <option>Male Dorm</option>
                                    <option>Female Dorm</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group textarea">
                            <MessageSquare size={16} />
                            <textarea placeholder="Your Message"></textarea>
                        </div>

                        <button type="submit">
                            Send Enquiry →
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default EnquirySection;