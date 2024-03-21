'use client'

import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import { CaseStudyType } from '@/type/CaseStudyType'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    data: Array<CaseStudyType>
}

const CaseStudyThree: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<string>('fintech')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    return (
        <>
            <div className="case-study-block style-three lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <div className="heading flex items-center justify-between flex-wrap gap-8 gap-y-5">
                        <div className="heading3">Case Study</div>
                        <div className="menu-tab flex items-center gap-2">
                            {['investing', 'fintech', 'crypto', 'blockchain', 'planning'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`tab-item relative text-secondary text-button-sm py-2 px-5 cursor-pointer duration-500 rounded-2xl ${activeTab === item ? 'active text-white' : 'hover:text-gradient'}`}
                                    onClick={() => handleTabClick(item)}
                                >
                                    {activeTab === item && (
                                        <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-gradient'></motion.div>
                                    )}
                                    <span className='relative text-button-sm white-space-nowrap capitalize z-[1]'>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="list md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            speed={400}
                            className='h-full relative'
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                1410: {
                                    slidesPerView: 3,
                                    spaceBetween: 32,
                                }
                            }}
                        >
                            {data.filter(item => item.category === activeTab).slice(0, 4).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <CaseStudyItem data={item} style='style-three' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CaseStudyThree