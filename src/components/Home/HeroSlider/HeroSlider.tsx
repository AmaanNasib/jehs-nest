import React, { useRef } from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import slideImage from "/images/5DGT2003_.jpg";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import 'swiper/css/effect-fade';

import "./HeroSlider.css";

const slides = [
    {
        title: (
            <>
                <span className="green">Fresh</span>{" "}
                <span className="pill">Kitchen</span>
                <br />
                <span className="white">Meals</span>{" "}
                <span className="green">Delivered</span>{" "}
                <span className="white">Daily</span>
                <br />
                <span className="white">With Care</span>
            </>
        ),
        desc:
            "Jeh’s Kitchen serves freshly prepared homely meals for students, working professionals, and corporate clients with premium ingredients, hygienic preparation, and reliable daily delivery.",
        img: slideImage,
        btn1: "Order Tiffin",
        btn2: "Explore Menu"
    },
    {
        title: (
            <>
                <span className="green">Comfortable</span>{" "}
                <span className="pill">Stays</span>
                <br />
                <span className="white">For</span>{" "}
                <span className="green">Students</span>{" "}
                <span className="white">& Working Professionals</span>
            </>
        ),
        desc:
            "Jeh’s Nest offers secure and thoughtfully managed dormitory spaces designed for comfort, hygiene, and community living with daily meal support.",
        img: "/images/DSC08603-copy-768x512.jpg",
        btn1: "Book Your Stay",
        btn2: "Explore Rooms"
    }
];

const HeroSlider: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="wapper-hero">
            <section className="hero-section">

                {/* ARROWS */}
                {/* <div className="hero-arrows">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <FiChevronLeft />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <FiChevronRight />
                    </button>
                </div> */}

                <Swiper
                    modules={[EffectFade, Autoplay, Navigation]}
                    autoplay={{ delay: 4000 }}
                    loop
                    speed={800}
                    effect={'fade'}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="hero-slide"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            >
                                <div className="hero-content">

                                    <h1 className="hero-animate">{slide.title}</h1>

                                    <p className="hero-animate delay-1">{slide.desc}</p>

                                    <div className="hero-btns hero-animate delay-2">
                                        <button className="btn primary">{slide.btn1}</button>
                                        <button className="btn outline">{slide.btn2}</button>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default HeroSlider;