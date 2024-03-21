import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const SliderThree = () => {
    return (
        <div className="slider-block style-three">
            <div className="slider-main">
                <div className="slider-item">
                    <div className="container">
                        <div className="main flex justify-between item-start flex-wrap gap-8">
                            <div className="left-block flex flex-col gap-y-10 w-1/2">
                                <div className="heading2 text-white animate__animated animate__fadeInUp animate__delay-0-2s">Banking made easy with <br />our online platform</div>
                                <div className="button-block animate__animated animate__fadeInUp animate__delay-0-5s"><a className="button-main inline-flex hover:bg-white hover:text-black bg-gradient text-white" href="contact-two.html"><i className="ph ph-arrow-right text-white"></i><span>Get Free Consultant</span></a>
                                </div>
                            </div>
                            <div className="right-block flex flex-col gap-y-8 w-5/12 animate__animated animate__fadeInRight animate__delay-0-2s">
                                <div className="body2 text-placehover">Experience the convenience and simplicity of banking from anywhere with our user-friendly online platform. Manage your accounts, transfer funds, pay bills, and more with just a few clicks.</div>
                                <div className="count flex items-center justify-between gap-6">
                                    <div className="left">
                                        <div className="heading3 text-white">1.77k</div>
                                        <div className="body1 text-white mt-1">Business Problem Solving</div>
                                    </div>
                                    <div className="right">
                                        <div className="heading3 text-white">246k</div>
                                        <div className="body1 text-white mt-1">Passive income earners</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-img w-11/12 max-md:hidden">
                                <Image width={5000} height={5000} className="w-full animate__animated animate__fadeInUp animate__delay-1s" src="/images/slider/graphic-three.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderThree