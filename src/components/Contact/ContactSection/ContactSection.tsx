
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!form.name || !form.phone || !form.email || !form.message) {
            setError("Please fill in all required fields.");
            return;
        }
        // WhatsApp number (India format, no + or spaces)
        const whatsappNumber = "8104859802";
        const text = `Enquiry from JEH'S NEST website:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
        const url = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(url, "_blank");
        // Optionally, reset form
        setForm({ name: "", phone: "", email: "", message: "" });
    };

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
                    <img src="/images/5DGT2585.JPG" />

                    <div className="contact-badge">
                        JEH'S NEST
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="contact-form" data-aos="fade-left">

                    <h3>Get in <span>Touch</span></h3>

                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <label>Full Name*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone*</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message*</label>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
                        <button className="contact-btn" type="submit">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;