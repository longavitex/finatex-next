'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const TestimonialTwo = () => {
    return (
        <>
            <div className="testimonial-block style-one">
                <div className="container">
                    <div className="testimonial-main bg-surface pt-20 pb-12 my-20 rounded-[40px] flex items-center justify-center">
                        <div className="content w-2/3">
                            <div className="heading3 text-center">Trusted By Professionals</div>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                speed={400}
                                modules={[Pagination, Autoplay, Navigation]}
                                className='h-full relative lg:mt-10 mt-7'
                                autoplay={{
                                    delay: 4000,
                                }}
                            >
                                <SwiperSlide className="pb-24">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}Working with this agency has been a game-changer for our business. Their team is knowledgeable, responsive, and always goes the extra mile.{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">maverick Nguyen // Ex-CTO, Dropbox</div>
                                </SwiperSlide>
                                <SwiperSlide className="pb-24">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}Working with this agency has been a game-changer for our business. Their team is knowledgeable, responsive, and always goes the extra mile.{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">maverick Nguyen // Ex-CTO, Dropbox</div>
                                </SwiperSlide>
                                <SwiperSlide className="pb-24">
                                    <div className="text-2xl font-medium text-center">{String.raw`"`}Working with this agency has been a game-changer for our business. Their team is knowledgeable, responsive, and always goes the extra mile.{String.raw`"`}</div>
                                    <div className="text-button text-center mt-5">maverick Nguyen // Ex-CTO, Dropbox</div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialTwo