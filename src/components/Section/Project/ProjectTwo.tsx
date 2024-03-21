'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const ProjectTwo = () => {
    return (
        <div className="our-project-block lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading3 text-center">Our Projects</div>
                <div className="body2 text-secondary mt-3 text-center">Find your favourite jobs and get the benefits of yourself</div>
            </div>
            <div className="list-project md:mt-10 mt-7">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    speed={400}
                    modules={[Pagination, Autoplay]}
                    className='h-full relative'
                    autoplay={{
                        delay: 4000,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/Project.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Financial assessment</div>
                                <div className="body3 text-white mt-1">Budget Planning</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/Project-1.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Budget Planning</div>
                                <div className="body3 text-white mt-1">Financial Advice</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/Project-2.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Insurance advice</div>
                                <div className="body3 text-white mt-1">Financial Planning</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/Project-3.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Savings advice</div>
                                <div className="body3 text-white mt-1">Business Planning</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/Project-4.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Portfolio Management</div>
                                <div className="body3 text-white mt-1">Manage Account Infor</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default ProjectTwo