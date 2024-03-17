'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    classname: string
}

const PartnerOne: React.FC<Props> = ({ classname }) => {
    return (
        <>
            <div className={`brand-block py-9 ${classname}`}>
                <div className="container">
                    <div className="list-brand">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo-2.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo-3.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo-4.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo-5.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[34px]">
                                    <Image
                                        src={'/images/partner/Logo.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerOne