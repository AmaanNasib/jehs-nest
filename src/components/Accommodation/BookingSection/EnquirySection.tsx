
import { useState } from "react";
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
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        adults: "",
        dorm: "",
        message: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.email || !form.date || !form.adults || !form.dorm || !form.message) {
            setError("Please fill in all required fields.");
            return;
        }
        const whatsappNumber = "8104859802";
        const text = `Dorm Enquiry from JEH'S NEST website:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0ADate: ${encodeURIComponent(form.date)}%0AAdults: ${encodeURIComponent(form.adults)}%0ADorm: ${encodeURIComponent(form.dorm)}%0AMessage: ${encodeURIComponent(form.message)}`;
        const url = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(url, "_blank");
        setForm({ name: "", phone: "", email: "", date: "", adults: "", dorm: "", message: "" });
    };

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

                    <form className="enquiry-form" onSubmit={handleSubmit} autoComplete="off">
                        <div className="input-group">
                            <User size={16} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <Phone size={16} />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <Mail size={16} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <Calendar size={16} />
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <User size={16} />
                                <select
                                    name="adults"
                                    value={form.adults}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Adults</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <Home size={16} />
                                <select
                                    name="dorm"
                                    value={form.dorm}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Dorm</option>
                                    <option value="Male Dorm">Male Dorm</option>
                                    <option value="Female Dorm">Female Dorm</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group textarea">
                            <MessageSquare size={16} />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
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