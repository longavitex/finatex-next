'use client'

import { TestimonialType } from "@/type/TestimonialType"
import TestimonialItem from '@/components/Testimonial/TestimonialItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Props {
    data: Array<TestimonialType>
}

const TestimonialSix = ({ data }: Props) => {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 100,
        infinite: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ]
    };

    return (
        <>
            <div className="testimonial-block style-three style-six our-project-block">
                <div className="container">
                    <div className="heading3 text-center">Our Testimonials</div>
                </div>
                <div className="list-testimonial list-project lg:mt-10 mt-7">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={false}
                        pagination={{ clickable: true }}
                        speed={400}
                        initialSlide={1}
                        modules={[Pagination, Navigation]}
                        className='h-full relative'
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 100,
                            }
                        }}
                    >
                        {data.slice(5, 9).map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialItem data={item} style='style-six' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TestimonialSix