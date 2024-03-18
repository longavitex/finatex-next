'use client'

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const CounterFour = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <>
            <div className="video-block style-four lg:mt-[100px] sm:mt-16 mt-10" id="video">
                <div className="container -mb-[100px]">
                    <div className="video w-full rounded-3xl overflow-hidden relative">
                        <div className="bg-img lg:w-full w-auto display-block max-lg:h-[380px] max-sm:h-[320px]">
                            <img className="w-full h-full object-cover" src="/images/component/thumbnail4.png" alt="" />
                        </div>
                        <span
                            className="absolute w-20 h-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-white rounded-full cursor-pointer duration-300 text-critical hover:bg-critical hover:text-white"
                            onClick={() => setOpenVideo(true)}
                        >
                            <Icon.Play weight="fill" className="text-4xl" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="count-number-block style-four bg-deep-purple pb-20 lg:pt-[182px] pt-[142px]">
                <div className="container">
                    <div className="grid xl:grid-cols-4 grid-cols-2 gap-y-8">
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
export default CounterFour