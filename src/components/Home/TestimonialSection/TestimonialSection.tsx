import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// @ts-ignore
import "swiper/css";
import "./TestimonialSection.css";

const testimonials = [
    {
        name: "Sam Johnson",
        text: "I’ve been using this tiffin service for months and it genuinely feels like home-cooked food.",
        role: "Working Professional",
        img: "https://images.pexels.com/photos/12639564/pexels-photo-12639564.jpeg"
    },
    {
        name: "Boris Elbert",
        text: "As a student, managing meals was stressful. This service made it simple.",
        role: "Student",
        img: "https://placehold.co/300x350"
    },
    {
        name: "Serna Viktor",
        text: "Food arrives on time every day and tastes great.",
        role: "Customer",
        img: "https://placehold.co/300x350"
    }
];

const TestimonialSection: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) setDevice("mobile");
            else if (w < 1024) setDevice("tablet");
            else setDevice("desktop");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = device === "mobile";
    const isTablet = device === "tablet";
    const isDesktop = device === "desktop";

    return (
        <section className="testimonial-section">
            <div className="container">

                {/* HEADER */}
                <div className="testimonial-header">
                    <h2>What Our Clients Say About Our Service</h2>

                    <div className="testimonial-arrows">
                        <button onClick={() => swiperRef.current?.slidePrev()}>
                            {(isMobile || isTablet) ? <FiChevronLeft /> : <FiChevronUp />}
                        </button>
                        <button onClick={() => swiperRef.current?.slideNext()}>
                            {(isMobile || isTablet) ? <FiChevronRight /> : <FiChevronDown />}
                        </button>
                    </div>
                </div>

                <div className="testimonial-body">

                    {/* LEFT NAMES (ONLY DESKTOP) */}
                    {isDesktop && (
                        <div className="testimonial-names">
                            {testimonials.map((item, index) => (
                                <span
                                    key={index}
                                    className={index === activeIndex ? "active" : ""}
                                    onClick={() => swiperRef.current?.slideTo(index)}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* SLIDER */}
                    <div className="testimonial-slider">
                        <Swiper
                            direction={isDesktop ? "vertical" : "horizontal"}
                            slidesPerView={1}
                            speed={700}
                            mousewheel={isDesktop}
                            modules={[Navigation, Mousewheel]}
                            allowTouchMove={true}
                            touchStartPreventDefault={false}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-card">

                                        <div className="testimonial-user">
                                            <div className="testcont">
                                                <p className="testimonial-text">“{item.text}”</p>

                                                <div className="user-info">
                                                    <h4>{item.name}</h4>
                                                    <span>{item.role}</span>
                                                </div>
                                            </div>

                                            <img src={item.img} alt={item.name} />
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;