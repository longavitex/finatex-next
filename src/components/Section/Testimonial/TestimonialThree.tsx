'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { TestimonialType } from "@/type/TestimonialType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import TestimonialItem from '@/components/Testimonial/TestimonialItem';

interface Props {
    data: Array<TestimonialType>
}

const TestimonialThree = ({ data }: Props) => {
    return (
        <>
            <div className="testimonial-block style-three our-project-block lg:pb-[100px] sm:pb-16 pb-10">
                <div className="container">
                    <div className="heading3 text-center">What People Are Saying</div>
                    <div className="list-testimonial list-project lg:mt-10 mt-7">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            speed={400}
                            modules={[Pagination, Autoplay, Navigation]}
                            className='h-full relative'
                            autoplay={{
                                delay: 4000,
                            }}
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
                                    slidesPerView: 3,
                                    spaceBetween: 32,
                                }
                            }}
                        >
                            {data.slice(0, 4).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialItem data={item} style='style-three' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialThree