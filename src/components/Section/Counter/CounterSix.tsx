'use client'

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import Image from "next/image";

const CounterSix = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <>
            <div className="video-block style-six lg:mt-[100px] sm:mt-16 mt-10">
                <div className="container">
                    <div className="video w-full sm:py-9 py-4 sm:px-10 px-5 rounded-3xl overflow-hidden relative max-sm:h-[300px]">
                        <div className="bg-img w-full h-full rounded-2xl overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/component/thumbnail6.png" alt="" />
                        </div>
                        <span
                            className="absolute sm:w-20 w-16 sm:h-20 h-16 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-white rounded-full cursor-pointer duration-300 text-critical hover:bg-critical hover:text-white"
                            onClick={() => setOpenVideo(true)}
                        >
                            <Icon.Play weight="fill" className="sm:text-4xl text-3xl" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="count-number-block style-six">
                <div className="container flex items-center justify-center">
                    <div className="lg:w-5/6 w-full">
                        <div className="capitalize text-white text-center text-2xl font-medium lg:mt-10 mt-7">Finatex is a leading blockchain platform that provides cutting-edge solutions for businesses and individuals seeking to leverage the power of blockchain technology. </div>
                        <div className="grid xl:grid-cols-4 grid-cols-2 gap-y-8 lg:mt-10 mt-7">
                            <div className="item">
                                <div className="flex flex-col items-center">
                                    <div className="count-block flex items-center">
                                        <div className="counter heading3 text-white">2.3</div>
                                        <span className="heading3 text-white">k</span>
                                    </div>
                                    <div className="body1 text-white text-center">Business Setup Growth</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="flex flex-col items-center">
                                    <div className="count-block flex items-center">
                                        <div className="counter heading3 text-white">1.77</div>
                                        <span className="heading3 text-white">k</span>
                                    </div>
                                    <div className="body1 text-white text-center">Business Problem Solving</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="flex flex-col items-center">
                                    <div className="count-block flex items-center">
                                        <div className="counter heading3 text-white">298</div>
                                        <span className="heading3 text-white">k</span>
                                    </div>
                                    <div className="body1 text-white text-center">Goal achiever</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="flex flex-col items-center">
                                    <div className="count-block flex items-center">
                                        <div className="counter heading3 text-white">246</div>
                                        <span className="heading3 text-white">k</span>
                                    </div>
                                    <div className="body1 text-white text-center">Passive income earners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal-video-block`} onClick={() => setOpenVideo(false)}>
                <div className={`modal-video-main ${openVideo ? 'open' : ''}`} onClick={(e) => { e.stopPropagation() }}>
                    <div className="video-block h-full w-full">
                        <iframe src="https://www.youtube.com/embed/RaQKTgGyyyo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CounterSix