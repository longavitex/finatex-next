'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Marquee from 'react-fast-marquee'

interface Props {
    classname: string
}

const PartnerSix: React.FC<Props> = ({ classname }) => {
    return (
        <>
            <div className={`brand-block py-9 ${classname}`}>
                <div className="container">
                    <div className="list-brand">
                        <Marquee>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo-1.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo-2.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo-3.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo-4.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo-5.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                            <div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
                                <Image
                                    src={'/images/partner/Logo.png'}
                                    width={300}
                                    height={300}
                                    alt='1'
                                    className='h-full w-auto duration-500 relative object-cover'
                                />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerSix