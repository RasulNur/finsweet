import { FC, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Swiper from "swiper";

import "./reviews.scss";
import Review from "./review/Review";

const Reviews: FC = () => {
    const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__wrapper">
                    <div className="reviews__header">
                        <h5 className="reviews__subheading">TESTIMONIALs</h5>
                        <h2 className="reviews__heading">
                            What people say about our blog
                        </h2>
                        <p className="reviews__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    <SwiperComponent
                        className="review__swiper"
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        onSwiper={(swiper) => {
                            setSwiperRef(swiper);
                        }}>
                        <SwiperSlide>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Review />
                        </SwiperSlide>
                        <div className="swiper-btns">
                            <button
                                className="swiper-btn"
                                onClick={() => swiperRef?.slidePrev()}>
                                <BsArrowLeft />
                            </button>

                            <button
                                className="swiper-btn"
                                onClick={() => swiperRef?.slideNext()}>
                                <BsArrowRight />
                            </button>
                        </div>
                    </SwiperComponent>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
