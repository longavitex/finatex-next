'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const SliderFour = () => {
    return (
        <>
            <div className="slider-block style-one style-four">
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
                                        src={'/images/slider/slider4-1.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex flex-col justify-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Empower Your Finances</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Empower Your Finances</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">with Personalized</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">with Personalized</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" block relative overflow-hidden">Solution</span>
                                                <span className=" block absolute top-0 left-0 w-full h-full">Solution</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Our platform offers secure and reliable investment <br className="max-md:hidden" />opportunities in the rapidly growing world of cryptocurrency.</div>
                                        <div className="button-block flex items-center gap-4 md:mt-10 mt-6">
                                            <Link className="button-main bg-success hover:bg-black text-white" href="/service/service-one">Discovery now</Link>
                                            <Link
                                                className="button-main inline-flex bg-transparent text-button rounded-lg items-center gap-2"
                                                href="#video">
                                                <span className="w-9 h-9 rounded-full border-2 border-critical flex items-center justify-center text-critical duration-300">
                                                    <Icon.Play weight="fill" className="text-sm" />
                                                </span>
                                                <span>Watch Demos</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-second">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider4-2.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex flex-col justify-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Tailored Financial</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Tailored Financial</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Strategies for</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Strategies for</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" block relative overflow-hidden">Success</span>
                                                <span className=" block absolute top-0 left-0 w-full h-full">Success</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Our tailored financial strategies are designed <br className="max-md:hidden" />to empower you on your journey
                                            to success</div>
                                        <div className="button-block flex items-center gap-4 md:mt-10 mt-6">
                                            <Link className="button-main bg-success hover:bg-black text-white" href="/service/service-one">Discovery now</Link>
                                            <Link
                                                className="button-main inline-flex bg-transparent text-button rounded-lg items-center gap-2"
                                                href="#video">
                                                <span className="w-9 h-9 rounded-full border-2 border-critical flex items-center justify-center text-critical duration-300">
                                                    <Icon.Play weight="fill" className="text-sm" />
                                                </span>
                                                <span>Watch Demos</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item slider-third">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/slider/slider4-3.png'}
                                        width={4000}
                                        height={3000}
                                        alt="bgslider"
                                        priority={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="container">
                                    <div className="text-content flex flex-col justify-between">
                                        <div className="heading2">
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Customized Financial</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Customized Financial</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className="block relative overflow-hidden">Planning for</span>
                                                <span className="block absolute top-0 left-0 w-full h-full">Planning for</span>
                                            </div>
                                            <div className="relative overflow-hidden">
                                                <span className=" block relative overflow-hidden">Your Goals</span>
                                                <span className=" block absolute top-0 left-0 w-full h-full">Your Goals</span>
                                            </div>
                                        </div>
                                        <div className="body2 mt-3 text-secondary">Experience the power of customized financial planning, <br className="max-md:hidden" />bringing you closer to
                                            achieving your goals</div>
                                        <div className="button-block flex items-center gap-4 md:mt-10 mt-6">
                                            <Link className="button-main bg-success hover:bg-black text-white" href="/service/service-one">Discovery now</Link>
                                            <Link
                                                className="button-main inline-flex bg-transparent text-button rounded-lg items-center gap-2"
                                                href="#video">
                                                <span className="w-9 h-9 rounded-full border-2 border-critical flex items-center justify-center text-critical duration-300">
                                                    <Icon.Play weight="fill" className="text-sm" />
                                                </span>
                                                <span>Watch Demos</span>
                                            </Link>
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

export default SliderFour