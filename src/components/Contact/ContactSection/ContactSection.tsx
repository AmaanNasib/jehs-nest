import { Mail, MapPin, Phone, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contact-section">

            {/* TOP BAR */}
            <div className="container contact-top" data-aos="fade-up">

                <div className="contact-top-item">
                    <Phone size={30} />
                    <div>
                        <span>Call us for Inquiry:</span>
                        <h4>9892939585 / 9920700400</h4>
                    </div>
                </div>

                <div className="contact-top-item">
                    <Mail size={30} />
                    <div>
                        <span>Email Address:</span>
                        <h4>bookings@jehsnest.com / kitchen@jehsnest.com</h4>
                    </div>
                </div>

                <div className="contact-top-item">
                    <MapPin size={30} />
                    <div>
                        <span>Address:</span>
                        <h4>Gala no.1, 1st floor, Near Dwarkadha, 90 Feet Rd, opp. Punjab National Bank, Krishna Nagar, Mumbai, Maharashtra 400072</h4>
                    </div>
                </div>

            </div>

            {/* MAIN */}
            <div className="container contact-wrapper">

                {/* LEFT IMAGE */}
                <div className="contact-image" data-aos="fade-right">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" />

                    <div className="contact-badge">
                        JEH'S NEST
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="contact-form" data-aos="fade-left">

                    <h3>Get in <span>Touch</span></h3>

                    <form>

                        <div className="form-group">
                            <label>Full Name*</label>
                            <input type="text" placeholder="Your Full Name" />
                        </div>

                        <div className="form-group">
                            <label>Phone*</label>
                            <input type="text" placeholder="Your Phone Number" />
                        </div>

                        <div className="form-group">
                            <label>Email*</label>
                            <input type="email" placeholder="Your Email" />
                        </div>

                        <div className="form-group">
                            <label>Message*</label>
                            <textarea rows={4} placeholder="Your Message"></textarea>
                        </div>

                        <button className="contact-btn">
                            Send Message <Send size={16} />
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;