import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import 'swiper/css/effect-fade';

import "./HeroSlider.css";

const slides = [
    {
        title: (
            <>
                <span className="green">DELICIOUS</span>{" "}
                <span className="pill">DISHES</span>
                <br />
                <span className="white">TO</span>{" "}
                <span className="green">ENRICH</span>{" "}
                <span className="white">YOUR</span>
                <br />
                <span className="white">WISHES</span>
            </>
        ),
        desc:
            "Fresh home-style tiffin delivered daily. Healthy, hygienic, and made with care for your everyday needs.",
        img: "https://t3.ftcdn.net/jpg/10/08/49/26/240_F_1008492614_RwP6CFpiUnxXBC4MK6C5kHaXWtLQTh99.jpg",
        btn1: "Contact us",
        btn2: "Check details"
    },
    {
        title: (
            <>
                <span className="green">COMFORTABLE</span>{" "}
                <span className="pill">STAYS</span>
                <br />
                <span className="white">FOR</span>{" "}
                <span className="green">STUDENTS</span>{" "}
                <span className="white">& WORKERS</span>
            </>
        ),
        desc:
            "Affordable dormitory with clean rooms, safe environment and all daily essentials included.",
        img: "https://t4.ftcdn.net/jpg/09/84/28/25/240_F_984282595_RxmvqKMzQQqlbFXIbQnywaBmbz7Rq5Hr.jpg",
        btn1: "Book now",
        btn2: "Explore rooms"
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