'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one">
                <div className="prev-arrow flex items-center justify-center">
                    <Icon.CaretLeft className="text-white heading6" weight="bold" />
                </div>
                <div className="slider-main">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextEl: '.next-arrow',
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={400}
                        modules={[Pagination, Autoplay, Navigation]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item slider-first">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider1.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Simplify and Secure</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Simplify and Secure</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Your Payments with</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Your Payments with</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">Our Solution</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">Our Solution</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Our platform offers secure and reliable investment <br />opportunities in the rapidly growing world of cryptocurrency.</div>
                                        <div className="button-block md:mt-10 mt-6"><a className="button-main bg-blue text-white" href="service-one.html">Discovery now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-second">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider1-2.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Empower Your</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Empower Your</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Business with</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Business with</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">Seamless Payments</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">Seamless Payments</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Our platform offers secure and reliable investment <br />opportunities in the rapidly growing world of cryptocurrency.</div>
                                        <div className="button-block md:mt-10 mt-6"><a className="button-main bg-blue text-white" href="service-one.html">Discovery now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-third">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider1-1.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex-columns-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Powerful Payment</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Powerful Payment</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Solutions for</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Solutions for</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" text-blue block relative overflow-hidden">Seamless Transactions</span>
                                                <span className=" text-blue block absolute top-0 left-0 w-full h-full">Seamless Transactions</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Trust us to help you navigate the complex landscape and <br />achieve your financial goals with peace of mind.</div>
                                        <div className="button-block md:mt-10 mt-6"><a className="button-main bg-blue text-white" href="service-one.html">Discovery now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="next-arrow flex items-center justify-center">
                    <Icon.CaretRight className="text-white heading6" weight="bold" />
                </div>
            </div>
        </>
    )
}

export default SliderOne